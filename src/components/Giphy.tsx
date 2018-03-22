import * as React from 'react';

interface GiphyProps {
    // width: number;
    // height: number;
    poster: any;
    videoClass?: any;
    video: any;
    altHref: string;
}

const Giphy: React.SFC<GiphyProps> = (props) => (
    <div>
        <video
            autoPlay
            loop
            muted
            poster={props.poster}
            className={props.videoClass}
        >
            <source type="video/mp4" src={props.video} />
            Your browser does not support HTML5 video tag.
                        <a href={props.altHref}>
                Click here to view original GIF
                        </a>
        </video>
    </div>
);

export default Giphy;