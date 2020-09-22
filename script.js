const tagsEl = document.querySelectorAll('.tag');
const projectsEl = document.querySelectorAll('.project');

tagsEl.forEach(tagEl => {
	tagEl.addEventListener('click', () => {
		const tag = tagEl.getAttribute('data-tag');

		clearTagsActiveClass();

		tagEl.classList.add('text-teal-100', 'bg-teal-600');
		tagEl.classList.remove('text-teal-600', 'bg-teal-200');

		projectsEl.forEach(project => {
			const projectTags = project.getAttribute('data-tags').split(',');
			let show = false;

			projectTags.forEach(projectTag => {
				if (tag === projectTag) {
					show = true;
				}
			});

			// filter based on the tag
			if (tag === 'all' || show) {
				project.classList.remove('hidden');
			} else {
				project.classList.add('hidden');
			}
		});
	});
});

function clearTagsActiveClass() {
	tagsEl.forEach(tagEl => {
		tagEl.classList.remove('text-teal-100', 'bg-teal-600');
		tagEl.classList.add('text-teal-600', 'bg-teal-200');
	});
}