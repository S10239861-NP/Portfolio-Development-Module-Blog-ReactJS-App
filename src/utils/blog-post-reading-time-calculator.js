/*
Note: The abbreviation "wpm" means "words per minute".
*/
const AVERAGE_ADULT_READING_SPEED_IN_WPM = 225;

class BlogPostReadingTimeCalculator
{
    /**
     * @type {BlogPostReadingTimeCalculator}
     */
    static #instance = null;

    #blogPostTitleToAverageReadingTimeMapCache = new Map();

    static get instance()
    {
        if (BlogPostReadingTimeCalculator.#instance == null)
        {
            BlogPostReadingTimeCalculator.#instance = new BlogPostReadingTimeCalculator();
        }

        return BlogPostReadingTimeCalculator.#instance;
    }

    constructor()
    {

    }

    /**
     * 
     * @param {BlogPostView} blogPostView 
     * @returns {number} The average reading time for the blog post in minutes, rounded up to the nearest integer.
     */
    getAverageReadingTimeForBlogPost(blogPostView)
    {
        let averageReadingTime = this.#blogPostTitleToAverageReadingTimeMapCache.get(blogPostView.props.title);

        if (averageReadingTime != undefined)
        {
            return averageReadingTime;
        }

        this.#blogPostTitleToAverageReadingTimeMapCache.set(
            blogPostView.props.title,
            Math.ceil(
                blogPostView.rootElementRef.current.innerText.trim().split(/\s+/).length / AVERAGE_ADULT_READING_SPEED_IN_WPM
            )
        );

        return this.getAverageReadingTimeForBlogPost(blogPostView);
    }
}

export default BlogPostReadingTimeCalculator;