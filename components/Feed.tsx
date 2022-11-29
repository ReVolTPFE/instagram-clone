import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
	return (
		<main className="flex flex-row mx-4 md:mx-32">
			<section className="w-full md:w-3/5 flex flex-col">
				<Stories />

				<Posts />
			</section>

			<section className="hidden md:block md:w-2/5">
				<MiniProfile />

				{/* Suggestions */}
			</section>
		</main>
	);
}
