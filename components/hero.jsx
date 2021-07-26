import Config from "../portfolio.config";
import { FaDiscord, FaGithub, FaSpotify, FaYoutube } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"

function Hero({ name, pp, description, user }) {
  var renk;
  if (!user.discord_status) renk = "#808080"
  else if (user.discord_status === "online") renk = "#9be52a"
  else if (user.discord_status === "idle") renk = "#FFFF00"
  else if (user.discord_status === "dnd") renk = "#FF0000"
  else if (user.discord_status === "offline") renk = "#808080"

  return (<div>
    {/* --Header-- */}
    <section className="portmain hero is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <center><h1 className="tracking-in-expand" style={{ "color": "white", "fontFamily": "monospace" }}>{name}</h1></center>
              </a>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <a style={{ "color": "white" }}>The Backend Developer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        {/* Personality Info */}
        <div className="columns">
          <div className="column">
            <AnimatePresence>
              <motion.div animate={{ y: [-20, 20, -20, 20, -20] }} transition={{ duration: 7, repeat: Infinity }}>
                <center><img src={pp} style={{ "borderRadius": "50%", "width": "47%", "height": "auto", "border": `3px solid ${renk}` }} /></center>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="column">
            <div className="container has-text-centered" style={{ "textAlign": "left" }}>
              <h1 className="rainbow rainbow_text_animated">{Config.personalInfo.workAt}</h1>
              {user?.activities?.length > 0 && user?.activities?.some(val => val.name === "YouTube") ? (
                <div style={{ "color": "#ff4a6e" }}>
                  <FaYoutube /> <a style={{ "color": "#ff4a6e" }}>{user?.activities[0].details} - {user?.activities[0].state ? user?.activities[0].state : "Videoda değil"}</a>
                </div>
              ) : ""}
              { !user.listening_to_spotify ? "" : (
              <div>
                <FaSpotify style={{"color": "greenyellow"}}/> 
                <a href={`https://open.spotify.com/track/${user?.spotify?.track_id}`} style={{"textAlign": "left", "color": "greenyellow"}}>{" "}{Config.personalInfo.favArtists.includes(user.spotify.artist.split(";")[0] ? user.spotify.artist.split(";")[0] : user.spotify.artist) 
                ? 
                (<a style={{"color": "greenyellow"}}>{user.spotify.song} - <span style={{"color": "red"}}>{user.spotify.artist.split(";")[0]}</span>; {user.spotify.artist.split(";")[1]}</a>) 
                : 
                (<a style={{"color": "greenyellow"}}>{user.spotify.song} - {user.spotify.artist}</a>)}
                </a>
                <br/>
              </div>
              ) }
              <h2 className="portmain_text">{Config.personalInfo.description}</h2>
            </div>
            <hr />
            {/* İcons */}
            <center>
              <div className="porticons">
                <a href="https://open.spotify.com/user/699akvo5l56k1ofputv5742dk?si=51ec57c36e3e4360"><FaSpotify style={{ "width": "20", "height": "20", "margin": "16", "color": "greenYellow" }} /></a>
                <a href="https://discord.com/users/585562692132274197"><FaDiscord style={{ "width": "20", "height": "20", "margin": "16", "color": "#7289d9" }} /></a>
                <a href="https://github.com/xarionawashere"><FaGithub style={{ "width": "20", "height": "20", "margin": "16", "color": "white" }} /></a>
                <a href="https://www.youtube.com/channel/UCLa3L_yab6fs7lhIJoxXl2w"><FaYoutube style={{ "width": "20", "height": "20", "margin": "16", "color": "red" }} /></a>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
    <div className="box cta">
      <p className="has-text-centered">
        Number of active projects belonging to me as of the moment <span className="tag is-primary">5</span> number of projects whose construction has been deferred <span className="tag is-primary">4</span> production canceled <span className="tag is-primary">10</span> project exists.
        </p>
    </div>
  </div>);
}
export default Hero;
