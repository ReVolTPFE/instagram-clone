import Post from "./Post";

export default function Posts() {
	const posts = [
		{
			id: "1",
			username: "John Doe",
			userImg: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
			img: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1988&q=80",
			caption: "This is my 1st image",
		},
		{
			id: "2",
			username: "John Doe",
			userImg: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
			img: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
			caption: "This is my 2nd image",
		},
	]

	return (
		<div className="my-8">
			{posts.map((post) => (
				<Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
			))}
		</div>
	);
}
