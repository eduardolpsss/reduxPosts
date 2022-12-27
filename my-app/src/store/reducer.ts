import * as actionTypes from './actionTypes';

// Criando posts iniciais da aplicação
const initialState: PostState = {
    posts: [
        { id: 1, title: 'Post 1', body: 'Post 1 body' },
        { id: 2, title: 'Post 2', body: 'Post 2 body' },
        { id: 3, title: 'Post 3', body: 'Post 3 body' },
    ],
};

const reducer = (state: PostState = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            const newPost: IPost = {
                id: Math.random(), // not really unique but good enough here!
                title: action.post.title,
                body: action.post.body,
            };
            return {
                ...state,
                posts: state.posts.concat(newPost),
            };
        case actionTypes.DELETE_POST:
            const updatedPosts: IPost[] = state.posts.filter(post => post.id !== action.post.id);
            return {
                ...state,
                posts: updatedPosts,
            };
        default:
            return state;
    }
}

export default reducer;