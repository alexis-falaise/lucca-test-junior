import { Component, Input } from '@angular/core';

interface IThumbnailItem {
  name: string;
  description: string;
  img: string;
}

@Component({
	selector: 'app-thumbnail',
	templateUrl: './thumbnail.component.html',
	styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
	@Input() item: IThumbnailItem;
	get thumbnailImg() {
		return `assets/img/${this.item.img || 'placeholder'}/thumbnail.jpg`;
	}
}
