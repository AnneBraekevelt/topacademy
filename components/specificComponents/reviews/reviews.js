import React, { Component } from "react";
import css from "./reviews.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class reviews extends Component {

	constructor(props) {
		super(props);
		this.props.blok.title
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="reviews" />
					<div className={css["reviews-page__main-content"]}>
						<div id="reviews-page__short-description" key="reviews-page__short-description" className={css["reviews-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
						<div id="reviews-page__short-description" key="teacher-page__short-description" className={css["reviews-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								{this.props.blok.additionalstuff && this.props.blok.additionalstuff.map((nestedBlok) => (
									<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
								))}
							</section>
						</div>
					</div>

				</main>
			</div>
		);

	}
}