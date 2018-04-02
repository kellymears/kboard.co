import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p><strong>My name is k.</strong> I love keyboards. If you're here it means you probably do too.</p>
    <p><Link to="/log">Update log</Link></p>
    <hr/>
    <h2>My current boards</h2>
    <ul>
    <li>Anne Pro with modded floating key case and blank xda caps.</li>
    <li>Poker 2 with `SA Miami Night` caps</li>
    <li>Vortex Core with home-dyed DSA caps</li>
    </ul>
    <h2>What I'm currently working on</h2>
    <ul>
    <li>Modding Poker 2 with white LED backlight</li>
    <li>JJ40 based ortholinear build</li>
    </ul>
    <h2>My keyboard dreams</h2>
    <ul>
    <li>Build beautiful keyboards for people and make them really happy.</li>
    <li>Own either a laser engraver or CNC mill for creating keycap legends. Do you know anything about this? Please hit me up.</li>
    <li>Meet MiTo</li>
    </ul>
    <h2>Contact</h2>
    <ul>
    <li>hello@keyboards.gg</li>
    </ul>
    <hr/>
    <p>I just started this site and will be doing a lot more with it in the near future!</p>
    <p><strong>Thanks for coming along for the ride.</strong></p>

  </div>
)

export default IndexPage
