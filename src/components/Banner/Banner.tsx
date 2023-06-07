import playback from '../../assets/videos/bannervideo.mp4';
import styles from './Banner.module.scss';

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1>富山市</h1>
            <div className={styles.overlay}></div>
            <video className={styles.video} src={playback} autoPlay loop muted />
        </div>
    )
}