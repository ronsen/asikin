// place files you want to import through the `$lib` alias in this folder.
export function getVideos(videos: any) {
	return videos.map((video: any) => {
		return {
			type: video.type,
			id: video.id,
			url: `https://www.youtube.com/watch?v=${video.id}`,
			embededUrl: `https://www.youtube.com/embed/${video.id}`,
			title: video.title.text,
			thumbnail: {
				url: video.best_thumbnail  ? video.best_thumbnail.url : 'https://placehold.co/600x400?text=Asikin',
				width: video.best_thumbnail ? video.best_thumbnail.width : 600,
				height: video.best_thumbnail ? video.best_thumbnail.height : 400,
			},
			author: {
				name: video.author ? video.author.name : '',
			},
			view_count: video.view_count ? video.view_count.text : '',
			short_view_count: video.short_view_count ? video.short_view_count.text : '',
			published: video.published ? video.published.text : '',
		}
	});
}