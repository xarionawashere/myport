import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Config from "../portfolio.config";
import Hero from "../components/hero";
import Head from "../components/Head"

function Index() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const ws = new WebSocket("wss://api.lanyard.rest/socket");
    let heartbeatInterval;
    
    ws.onopen = (() => {
      console.log("Connection established!");
      
      ws.send(JSON.stringify({
        op: 2,
        d: {
          subscribe_to_id: Config.personalInfo.discordID
        }
      }));
      
      heartbeatInterval = setInterval(() => {
        ws.send(JSON.stringify({
          op: 3
        }));
      }, 30000);
    }); 
    
    ws.onmessage = ((msg) => { 
      msg = JSON.parse(msg.data);
      if (!["INIT_STATE", "PRESENCE_UPDATE"].includes(msg.t)) return;
      const user = msg.d?.discord_status ? msg.d : msg.d[Config.personalInfo.discordID];
      console.log(user.activities)
      setUser(user)
    })
    
    ws.onclose = (() => {
      clearInterval(heartbeatInterval);
    })
    
    return (() => {
      ws.close();
    });
  }, typeof window !== "undefined");
  
  return (<div>
    <Head/>
    <motion.div animate={{ y: -10, opacity: 100 }} initial={{ y: 0, opacity: 0 }}>
      <Hero name={Config.personalInfo.name} pp={Config.personalInfo.pp} user={user}/>
      
    </motion.div>
  </div>);
}
export default Index;