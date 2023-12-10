import expectedPostsList from "../../fixtures/posts/{ }posts.json"

describe('Posts', ()=>{
  let test = it('get post by id', () => {
    const id = 1
    cy.api({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET"
    }).as('postsById')

    cy.get('@postsById').should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(id)
      expect(response.body).to.have.keys(['userId','id', 'title', 'body'])
    })
  });

  describe('Posts list', () => {
    it('get posts list', () => {
      cy.api({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        method: 'GET'
      }).as('postsList')

      cy.get('@postsList').should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.deep.equal(expectedPostsList)
      })
    });
  });

  it('create new post', () => {
    const requestBody = {
      title: 'new',
      body: 'new post',
      userId: 1,
    }

    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts/',
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: requestBody
    }).as('createPost')

    cy.get('@createPost').should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.keys(['userId', 'title', 'body', 'id'])
      expect(response.body).to.deep.equal({...requestBody, id: 101})
    })
  });

  it('update new post', () => {
    const requestBody = {
      title: 'new111',
      body: 'new post111',
    }

    cy.api({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: requestBody
    }).as('updatePost')

    cy.get('@updatePost').should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.keys(['title', 'body', 'id'])
      expect(response.body).to.deep.equal({...requestBody, id: 1})
    })
  });

  it('delete post by id', () => {
    const id = 1
    cy.api({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: "DELETE"
    }).as('deletePost')

    cy.get('@deletePost').should((response) => {
      expect(response.status).to.eq(200)
    })
  });
})

