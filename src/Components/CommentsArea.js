import React from 'react'

const CommentsArea = () => {
    (function () {
        var d = document, s = d.createElement('script');
        s.src = 'https://makefit.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    return (
        <div>
            <div id="disqus_thread"></div>
        </div>
    )
}

export default CommentsArea