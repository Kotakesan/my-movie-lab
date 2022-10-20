describe('映画詳細覧ページ', () => {
  context('Collectionがある映画について', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/movie/24?*').as(
        'getMovie'
      )
      cy.intercept('GET', 'https://api.themoviedb.org/3/movie/24/credits?*').as(
        'getCredit'
      )
      cy.intercept(
        'GET',
        'https://api.themoviedb.org/3/movie/24/recommendations?*'
      ).as('getRecommendations')
      cy.visit('/movies/24')
      cy.routerPush('/movies/24')
    })

    it('ラベルの値が正しいこと', () => {
      cy.wait('@getMovie')
        .its('response.body')
        .then((res) => {
          cy.get('.format-title__title').should('include.text', res.title)
          cy.get('.format-title__text').should('include.text', res.tagline)
          cy.get('.label-movie__genre').should(
            'include.text',
            res.genres[0].name
          )
          cy.get('.label-movie__genre').should(
            'include.text',
            res.genres[1].name
          )
        })
    })

    it('ポスター画像をホバーしても文字が表示されないこと', () => {
      cy.get('.image-movie').realHover()
      cy.get('.image-movie__title').should('not.be.visible')
    })

    it('Overviewの値が正しいこと', () => {
      cy.wait('@getMovie')
        .its('response.body.overview')
        .then((overview) => {
          cy.get('.content-movie__overview').should('include.text', overview)
        })
      cy.wait('@getCredit')
        .its('response.body')
        .then((credit) => {
          const casts = credit.cast.map(({ name }) => name).slice(0, 4)
          const director = credit.crew.find(({ job }) => job === 'Director')
          cy.get('.content-movie__credit')
            .find('[data-testid="content-movie__casts"]')
            .should(($item) => {
              expect($item).to.have.length(4)
              expect($item.eq(0)).to.contain(casts[0])
              expect($item.eq(1)).to.contain(casts[1])
              expect($item.eq(2)).to.contain(casts[2])
              expect($item.eq(3)).to.contain(casts[3])
            })
          cy.get('.content-movie__credit')
            .find('[data-testid="content-movie__director"]')
            .should('include.text', director.name)
        })
    })

    it('お気に入りボタンをクリックすると表示が変更されること', () => {
      cy.get('.label-movie__btn-favorite')
        .find('.v-icon')
        .should('not.have.class', 'mdi-star')
      cy.get('.label-movie__btn-favorite').find('button').click()
      cy.get('.label-movie__btn-favorite')
        .find('.v-icon')
        .should('have.class', 'mdi-star')
    })

    it('Collectionの値が正しいこと', () => {
      cy.get('.content-collection__img').find('.image-movie').realHover()
      cy.get('.content-collection__img')
        .find('.image-movie__title')
        .should('include.text', 'Kill Bill Collection')
    })

    it('おすすめ映画取得apiで取得した値の数がページ内の要素の数と一致していること', () => {
      cy.wait('@getRecommendations')
        .its('response.body.results.length')
        .then((length) => {
          cy.get('[data-testid="list-movies__movie"]').should(
            'have.length',
            length
          )
        })
    })
  })

  context('Collectionがない映画について', () => {
    beforeEach(() => {
      cy.visit('/movies/273248')
      cy.routerPush('/movies/273248')
    })

    it('代替文字が表示されていること', () => {
      cy.get('.content-collection__no-information').should(
        'include.text',
        'No information provided.'
      )
    })
  })
})
