import { StoryUser } from "../src/types/stories.types";

export default function Story({id, username, img}: StoryUser): JSX.Element {
	return (
		<div className="flex-shrink-0 mx-1">
			<img className="h-14 rounded-full p-[1.5px] border-orange-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"  src={img} alt={username} />
			<p className="w-14 text-xs truncate">{username}</p>
		</div>
	);
}
