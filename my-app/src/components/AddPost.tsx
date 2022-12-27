import React from 'react';

type Props = {
  savePost: (post: IPost | any) => void;
}

export const AddPost: React.FC<Props> = ({ savePost }) => {
  const [post, setNewPost] = React.useState<IPost | {}>();

  const handlePostData = (event: React.FormEvent<HTMLInputElement>) => {
    setNewPost({
      ...post,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const addNewPost = (event: React.FormEvent) => {
    event.preventDefault();
    savePost(post);
  };

  return (
    <form onSubmit={addNewPost} className='Add-post'>
      <input
        type='text'
        id='title'
        placeholder='Title'
        onChange={handlePostData}
      />
      <input
        type='text'
        id='body'
        placeholder='Body'
        onChange={handlePostData}
      />
      <button disabled={post === undefined ? true : false}>
        Add Post
      </button>
    </form>
  );
};

