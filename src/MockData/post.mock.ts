export interface Post {
    title: string;
    description: string;
    category: string;
    date: string
}

const PostMock: Post[] = [];

for (let i = 0; i < 10; i++) {
    const post = {
        title: `Sample Title ${i}`,
        description: `Sample Description - ${i}`,
        category: `sample category - ${i}`,
        date: new Date().toLocaleDateString()
    };
    PostMock.push(post)
}
export default PostMock;
