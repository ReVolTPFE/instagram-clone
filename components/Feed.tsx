import Stories from "./Stories";

export default function Feed() {
	return (
		<main className="flex flex-row mx-4 md:mx-32">
			<section className="w-full md:w-3/4">
				<Stories />

				{/* Posts */}
			</section>

			<section className="hidden md:block md:w-1/4">
				{/* Mini profile */}

				{/* Suggestions */}
			</section>
		</main>
	);
}
