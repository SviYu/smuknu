import s from './Footer.module.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.some}>
                    <a className={s.icon} href="http://facebook.com"><FacebookRoundedIcon sx={{fontSize: 40}} /></a> 
                    <a className={s.icon} href="http://instagram.com"><InstagramIcon sx={{fontSize: 40}}/></a> 
                    <a className={s.icon} href="http://pinterest.com"><PinterestIcon sx={{fontSize: 40}}/></a> 
                    <a className={s.icon} href="http://twitter.com"><TwitterIcon sx={{fontSize: 40}}/></a> 
                    <a className={s.icon} href="http://youtube.com"><YouTubeIcon sx={{fontSize: 40}}/></a> 
                </div>
                <div className={s.address}>
                    <a className={s.addressLine} href="mailto:mail@smuk.nu">mail@smuk.nu</a>
                    <p className={s.addressLine}>+45 123 345 33</p>
                </div>
            </footer>
        </>
    )
}
export default Footer