describe('映画一覧ページ', () => {
  before(() => {
    cy.visit('/movies')
  })

  beforeEach(() => {
    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/popular*').as(
      'getPopularMovies'
    )
    cy.routerPush('/movies')
  })

  it('ヘッダーロゴをクリックすると映画一覧ページへ遷移する', () => {
    cy.get('[data-testid="list-movies__movie"]').eq(0).click()
    cy.url().should('include', '/movies/')
    cy.get('.header-default__title div:first').click()
    cy.url().should('equal', 'http://localhost:3000/movies')
  })

  it('お気に入りアイコンをクリックするとお気に入り映画ページへ遷移すること', () => {
    cy.get('.v-toolbar__items button').eq(0).click()
    cy.url().should('include', '/favorites')
  })

  it('ラベルの値が正しいこと', () => {
    cy.get('.label-title').should('have.text', 'Popular Movies')
  })

  context('サイドバーについて', () => {
    beforeEach(() => {
      cy.get('.v-toolbar__items button').eq(1).click()
      cy.get('.v-navigation-drawer__content').as('sidebar').should('be.visible')
    })

    it('サイドバーに表示されている内容が正しいこと', () => {
      cy.get('@sidebar')
        .find('.v-list')
        .should('include.text', 'Favorite Movies')
      cy.get('.v-overlay__scrim').click()
    })

    it('メニューをクリックするとお気に入り映画ページへ遷移すること', () => {
      cy.get('@sidebar').find('.v-list').click()
      cy.url().should('include', '/favorites')
    })
  })

  it('映画取得apiで取得した値の数がページ内の要素の数と一致していること', () => {
    cy.wait('@getPopularMovies')
      .its('response.body.results.length')
      .then((length) => {
        cy.get('[data-testid="list-movies__movie"]').should(
          'have.length',
          length
        )
      })
  })

  it('映画画像をホバーするとタイトルが表示されること', () => {
    cy.get('.image-movie__title').eq(0).should('not.be.visible')
    cy.get('.image-movie').eq(0).realHover()
    cy.get('.image-movie__title').eq(0).should('be.visible')
  })

  it('映画画像をクリックするとその映画の詳細ページへ遷移すること', () => {
    cy.get('[data-testid="list-movies__movie"]').eq(0).click()
    cy.url().should('include', '/movies/')
  })

  it('ページネーションが正しく機能すること', () => {
    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/popular*').as(
      'getMovie'
    )
    cy.get('.v-pagination__item').eq(1).click()
    cy.wait('@getMovie').its('request.url').should('include', 'page=2')
  })

  context('検索について', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/search/movie*').as(
        'searchMovies'
      )
      cy.get('[data-testid="input-search"]').as('form')
    })

    it('検索が正しく動作すること', () => {
      cy.get('@form').clear().type('back to the future').blur().type('\n')
      cy.wait('@searchMovies')
        .its('request.url')
        .should('include', encodeURI('back+to+the+future'))
      cy.url().should('include', encodeURI('back to the future'))
    })

    it('検索後はラベルの文字列が変化していること', () => {
      cy.get('@form').clear().type('back to the future').blur().type('\n')
      cy.get('.label-title').should('have.text', 'Search Movies')
    })

    it('検索結果が無い場合、「No movies found.」と表示されること', () => {
      cy.get('@form').clear().type('a'.repeat(30)).blur().type('\n')
      cy.get('.movies__not-found').should('exist')
    })

    it('検索フォームが空の際に検索するとクエリがリセットされること', () => {
      cy.get('@form').type('back to the future').blur().type('\n')
      cy.url().should('include', encodeURI('back to the future'))
      cy.get('@form').clear().blur().type('\n')
      cy.url().should('equal', 'http://localhost:3000/movies')
      cy.get('.label-title').should('have.text', 'Popular Movies')
    })
  })
})
