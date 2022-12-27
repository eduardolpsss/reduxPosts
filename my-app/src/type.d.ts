// Tipagem de dados para os estados e as ações
interface IPost {
    id: number;
    title: string;
    body: string;
}

type PostState = {
    posts: IPost[];
}

type PostAction = {
    type: string;
    post: IPost;
}

type DispatchType = (args: PostAction) => PostAction