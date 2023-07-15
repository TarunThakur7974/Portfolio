import React from 'react'
import style from './Home.module.css'
import image from './My photo.jpg'
import C from './C.png'
import JS from './JS.png'
import HTML from './HTML.png'
import CSS from './CSS.png'
import REACT from './React.png'
import Todo from './Todo.png'
import Tic from './Tic.jpg'
import Typing from './Typing.webp'
import Text from './Text.png'
import Facebook from './facebook.png'
import Instagram from './instagram.png'

export default function TicTacToe() {
    document.title = "Portfolio"
    let nam = " I'm Tarun ! "
    let namlen = nam.length
    let namfuc = () => {
        let loops = setInterval(anim, 200)
        let a, b, c;
        b = 0
        c = ""
        function anim() {
            a = nam[b]
            b = b + 1;
            c = c + a;
            document.getElementById("head").innerHTML = c;
        }
        setTimeout(function () {
            clearInterval(loops)
        }, 200 * namlen)
    }
    setInterval(namfuc, 12000)

    let head = " Hello World ! "
    let len = head.length
    function runner() {
        let loops = setInterval(anim, 200)
        let a, b, c;
        b = 0
        c = ""
        function anim() {
            a = head[b]
            b = b + 1;
            c = c + a;
            document.getElementById("head").innerHTML = c;
        }
        setTimeout(function () {
            clearInterval(loops)
        }, 200 * len)
        setTimeout(namfuc, 4000)
    }
    runner();
    setInterval(runner, 8000)



    // setInterval(runner, 500 * len + 20s00)
    // name();
    // setInterval(name, 500 * namlen + 2000)
    // setInterval(name, 16000)

    return (
        <>
            <div className={style.main}>
                <nav className={style.navbar}>
                    <div className={style.navs}><a href="#about" >About</a></div>
                    <div className={style.navs}><a href="#education" >Education</a></div>
                    <div className={style.navs}><a href="#project" >Projects</a></div>
                    <div className={style.navs}><a href="#problem" >problem</a></div>
                </nav>
            </div>
            <div className={style.head}>
                <h1 id="head"> </h1>
            </div>
            <div id='about' style={{ height: '80px' }}></div>
            <hr />
            <br />
            <div className={style.about}>
                <div className={style.data}>
                    <h1>ABOUT</h1>
                    <p><strong> Name :</strong>Tarun Singh Thakur</p>
                    <p><strong>Class :</strong> B.Tech (CS) Pursuing </p>
                    <p><strong> DOB &nbsp;: </strong>26 / 10 /2001</p>
                    <p><strong>Address :</strong> Nehru Nagar G.No : 200/3, INDORE</p>
                    <p><strong>E-mail :</strong> tarunsinghthakur6261@gamil.com</p>
                    <br />
                </div>
                <img src={image} className={style.mypic} alt="My pic" />
            </div>
            <div>
                <div id="education" style={{ height: '80px' }} >  </div>
                <hr />
                <div className={style.educationH}>
                    <div className={style.data}>
                        <h1 >Education</h1>
                    </div>
                </div>
                <div>
                    <h1 className={style.hone}>Basic knowledge of these languages.</h1>
                    <p className={style.paraone}>I have learned all these languages from YouTube. (Self Study)</p>
                </div>
                <div className={style.education}>
                    <hr /><img src={C} alt="C icon" /><hr />
                    <img src={HTML} alt=" HTML icon" /><hr />
                    <img src={CSS} alt="CSS icon" /><hr />
                    <img src={JS} alt="JS icon" /><hr className={style.hr} />
                    <img className={style.react} src={REACT} alt="REACT icon" />< hr className={style.hr} />
                </div>
                <br />
            </div>
            <div className={style.media}></div>
            <div className={style.educa_data}>
                <p className={style.paraguid}><strong>Guided by : </strong>SSE: Mr. Narendra Singh Thakur, &nbsp;Mr. Harris Khan (Code With Harry) .</p>
                <p className={style.paraguid}>Some basic knowledge about Github</p>
            </div>
            <div id="project" style={{ height: '80px' }} ></div>
            <hr />
            <div className={style.projectsH}>
                <div className={style.data}>
                    <h1 >Projects</h1>
                </div>
            </div>
            <h1 className={style.hone}>Here are some basic projects available.</h1>
            <p style={{ textAlign: "center", fontSize: "25px", margin: "20px" }}>That I made at my Initial stage of learning, Atleast you can try it once</p>
            <div className={style.project}>
                <div className={style.cards}><a href="https://tarunthakur7974.github.io/TicTacToe/" ><img src={Tic} alt="Tic pic" /> <p>Tic-Tac-Toe</p></a>
                    <a href="https://github.com/TarunThakur7974/TicTacToe"><p>Source Code</p></a>
                </div>
                <div className={style.cards}><a href="https://tarunthakur7974.github.io/Typing-Test/" ><img src={Typing} alt="Typing pic" /><p>Typing-Test</p></a>
                    <a href="https://github.com/TarunThakur7974/Typing-Test"><p>Source Code</p></a></div>
                <div className={style.cards}><a href="https://tarunthakur7974.github.io/To-dos_app/" ><img src={Todo} alt="Todo pic" /><p>Todo-List</p></a>
                    <a href="https://github.com/TarunThakur7974/To-dos_app"><p>Source Code</p></a></div>
                <div className={style.cards}><a href="https://tarunthakur7974.github.io/TextUtils/"> <img src={Text} alt="Text pic" /><p >TextUtils</p></a>
                    <a href="https://github.com/TarunThakur7974/TextUtils"><p>Source Code</p></a></div>
            </div>
            <div id="problem" style={{ height: '80px' }} ></div>
            <hr />
            <div className={style.problems}>
                <div className={style.data}>
                    <h1 >Problems</h1>
                </div>
            </div>
            <div className={style.problem}>
                <ul className={style.ulproblem}>
                    <li>"This website or my projects were not fully responsive."</li>
                    <li>"I will use different links instead of components because the routing files are not working on deployment."</li>
                    <li>"I was unable to put a <b>title</b> attribute"</li>
                    <li>"In the Typing-Test project, the accuracy and net speed results were based on characters rather than words."</li>
                    <li>"My English is weak, so if there are any grammar or spelling mistakes, I apologize for them. Please correct them for me."</li>
                </ul>
            </div>
            <footer>
                <a href='https://www.instagram.com/private_id_6868/'><img src={Instagram} alt="Instagram icon" /></a>
                <div><h1>Thank You</h1></div>
                <a href='https://m.facebook.com/100015234401449/'><img src={Facebook} alt="Facebook icon" /></a>
            </footer>
        </>
    )
}
