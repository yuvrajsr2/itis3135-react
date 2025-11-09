import React from 'react'

export default function Introduction() {
  return (
    <main>
        <h2>Introduction</h2>

        <figure id="intro_figure">
            <img id='intro_img' src="uv.jpg" alt="Yuvraj Singh Rajput"></img>
            <figcaption>Yuvraj Singh Rajput</figcaption>
        </figure>

        <section>
            <h3>Personal Background</h3>
            <p>I have been living in NC for 7 years now and I am originally from Delhi, India</p>
            <p>My hobbies include playing sports like badminton and volleyball and playing video games like valorant.</p>

            <h3>Professional Background</h3>
            <p>I am currently pursuing a degree in Computer Science at the University of North Carolina at Charlotte.</p>
            
            <h3>Academic Background</h3>
            <p>I am current pursuing a cs degree at UNC Charlotte with a concentration in cybersecurity</p>
        </section>

        <section>
            <h3>Current Courses</h3>
            <ul class="centered-list">
                <li>Fall 2025
                    <ul>
                        <li>ITIS 3135 - Front End Development</li>
                        <li>ITIS 3200 - Intro to Security and Privacy</li>
                        <li>PHYS 1130 - Astronomy</li>
                        <li>ESCI 1501 - Earth Science theme course</li>
                        <li>CJUS 1511 - Criminal Justice theme course</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section>
            <h3>Memorable Personal Item</h3>
            <p>A memorable item for me is my keyboard. I’ve customized it with keycaps and switches that I love, making it uniquely mine.</p>
    
        </section>


    </main>
  )
}
