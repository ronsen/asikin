// place files you want to import through the `$lib` alias in this folder.
export function getVideos(videos: any) {
	return videos.map((video: any) => {
		return {
			type: video.type,
			id: video.id,
			url: `https://www.youtube.com/watch?v=${video.id}`,
			embeddedUrl: `https://www.youtube.com/embed/${video.id}?autoplay=1`,
			title: video.title.text,
			thumbnail: {
				url: video.thumbnails ? video.thumbnails[0].url : 'https://placehold.co/600x400?text=Asikin',
				width: video.thumbnails ? video.thumbnails[0].width : 600,
				height: video.thumbnails ? video.thumbnails[0].height : 400,
			},
			author: {
				id: video.author ? video.author.id : '',
				name: video.author ? video.author.name : '',
				url: video.author ? video.author.url : '',
			},
			view_count: video.view_count ? video.view_count.text : '',
			short_view_count: video.short_view_count ? video.short_view_count.text : '',
			published: video.published ? video.published.text : '',
		}
	});
}