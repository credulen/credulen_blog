import ArticleList from "@/components/ArticleList";
import {
	ArticleCards,
	HighlightCards,
	RecentPostCards,
} from "@/components/Cards";
import Subscribe from "@/components/Subscribe";

export default function Home() {
	return (
		<main className="container">
			<div className="row">
				<div className="col-md-8">
					{/* <div className="container"> */}
					<div className="">
						<HighlightCards />
					</div>

					<div className="row">
						<div className="col-md-6">
							<ArticleCards />
						</div>
						<div className="col-md-6">
							<ArticleCards />
						</div>
					</div>
					{/* </div> */}
				</div>
				<div className="col-md-4">
					<div>
						<RecentPostCards />
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
