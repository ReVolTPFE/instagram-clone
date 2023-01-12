import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";
import { StoryUser } from "../src/types/stories.types";

export default function Stories(): JSX.Element {
	const [storyUsers, setStoryUsers] = useState([]);

	useEffect(() => {
		const storyUsers: StoryUser[]|any = minifaker.array(20, (i) => (
			{
				id: i,
				username: minifaker.username({locale:"en"}).toLowerCase(),
				img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
			}
		));
		setStoryUsers(storyUsers);
	}, []);

	return (
		<div className="flex p-6 bg-white mt-8 border border-gray-200 overflow-x-scroll rounded-sm scrollbar-none">
			{storyUsers.map((user: StoryUser) => (
				<Story key={user.id} id={user.id} username={user.username} img={user.img} />
			))}
		</div>
	);
}
