export default function MiniProfile() {
	return (
		<div className="flex flex-col lg:flex-row text-center justify-center items-center lg:justify-between mt-14 ml-10">
			<img src="https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="w-16 h-16 rounded-full border p-[2px]" alt="" />
			<div className="flex-1 ml-4">
				<h2 className="font-bold">John Doe</h2>
				<h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
			</div>
			<button className="font-semibold text-blue-400 text-sm">Sign out</button>
		</div>
	);
}