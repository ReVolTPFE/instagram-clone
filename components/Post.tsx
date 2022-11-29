import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon } from "@heroicons/react/24/outline";

export default function Post({id, username, userImg, img, caption}) {
	return (
		<div className="bg-white mb-6 border border-gray-200 rounded-sm">
			<div className="flex justify-between items-center p-4">
				<div className="flex flex-row items-center">
					<img src={userImg} alt="" className="rounded-full w-10 h-10 p-[1.5px] border-orange-500 border-2" />
					<h2 className="text-lg font-bold text-gray-700 ml-4">{username}</h2>
				</div>

				<EllipsisHorizontalIcon className="h-8" />
			</div>

			<img src={img} alt="" className="w-full object-cover" />

			<div className="p-4">
				<div className="flex flex-row justify-between pb-4">
					<div className="flex flex-row">
						<HeartIcon className="h-8 mr-4" />
						<ChatBubbleOvalLeftEllipsisIcon className="h-8" />
					</div>

					<BookmarkIcon className="h-8" />
				</div>

				<p><span className="font-bold pr-4">{username}</span>{caption}</p>

				<form className="flex flex-row justify-center items-center w-100 mt-6 mb-4">
					<input type="text" placeholder="Type your comment here..." className="flex-1 mr-4 border-none focus:ring-0" />
					<input type="submit" value="Send" className="text-blue-500 font-bold cursor-pointer" />
				</form>
			</div>
		</div>
	);
}
