import ArticleList from "@/components/ArticleList";
import { ArticleCard, HighlightCard, RecentPostCard } from "@/components/Cards";
import Subscribe from "@/components/Subscribe";

export default function Home() {
	return (
		<main className="container">
			<div></div>
			<div className="row g-5">
				<div className="col-md-8">
					{/* <div className="container"> */}
					<div className="">
						<HighlightCard />
					</div>

					<div className="row">
						<div className="col-md-6">
							<ArticleCard />
						</div>
						<div className="col-md-6">
							<ArticleCard />
						</div>
					</div>
					{/* </div> */}
				</div>
				<div className="col-md-4">
					<div>
						<RecentPostCard />
					</div>

					<div>
						<h6 className="text-dark">
							Subscribe our newsletter to get update
						</h6>
						<Subscribe />
					</div>
				</div>
			</div>
		</main>
	);
}
