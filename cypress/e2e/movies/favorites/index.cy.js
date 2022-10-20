describe('お気に入り映画ページ', () => {
  before(() => {
    cy.visit('/movies/favorites')
    cy.routerPush('/movies/favorites')
  })

  it('お気に入り映画がない場合、代替テキストが表示されていること', () => {
    cy.get('.label-title').should('have.text', 'Oops... No favorite movies.')
  })

  it('ボタンクリックで映画一覧ページへ遷移すること', () => {
    cy.get('button').contains('Go favor them!').click()
    cy.url().should('include', '/movies')
  })

  context('お気に入り映画が登録されている場合', () => {
    before(() => {
      cy.routerPush('/movies/273248')
      cy.get('.label-movie__btn-favorite').find('button').click()
      cy.routerPush('/movies/24')
      cy.get('.label-movie__btn-favorite').find('button').click()
      cy.get('.v-toolbar__items button').eq(0).click()
    })

    beforeEach(() => {
      cy.routerPush('/movies/favorites')
    })

    it('お気に入り映画が表示されていること', () => {
      cy.get('[data-testid="list-movies__movie"]').should('have.length', 2)
    })

    it('画像クリックで映画詳細ページへ遷移すること', () => {
      cy.get('[data-testid="list-movies__movie"]').eq(0).click()
      cy.url().should('include', '/movies/')
    })

    it('お気に入り解除された映画は表示されていないこと', () => {
      cy.get('[data-testid="list-movies__movie"]').eq(0).click()
      cy.get('.label-movie__btn-favorite').find('button').click()
      cy.routerPush('/movies/favorites')
      cy.get('[data-testid="list-movies__movie"]').should('have.length', 1)
    })
  })
})
