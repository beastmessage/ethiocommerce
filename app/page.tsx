import Image from "next/image"
import Header from '@/componenets/Header'
import {descriptions} from '@/componenets/descriptions'
import Link from "next/link";
import {images} from "@/lib/images";
const Page = () => {
    return (
        <div>
            <Header />
            <div className={"top"}>
                <div className={"top1"}><Image src={"/logo.png"} className={"top-image"} alt={"logo"} width={200} height={200} /></div>
                <div className={"top1"}><Image src={"/hand.jpeg"} className={"top-image"} alt={"logo"} width={300} height={200} /></div>
                <div className={"top2"}><Image src={"/gov.png"} className={"top-image"} alt={"gov image"} width={200} height={200}/></div>
            </div>
            <div>
                <h1>Let&lsquo;s support eachother</h1>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
            <div className={"explore-container"}>
                <p>Download pdf for more information specially if you&apos;re working in government</p>
                <a className={"explore-button"} href={"#explore"} style={{textDecoration: "none"}}>Explore</a>
            </div>
            </div>
            <div className={"desc-grid"}>
                {descriptions.map(desc => (
                    <div key={desc.id} className={"desc-container"}>
                        <h2 className={"desc-title"}>{desc.title}</h2>
                        <div className={"desc-text"}><p>{desc.text}</p></div>
                    </div>
                ))}
            </div>
            <div className={"images-container"}>
                {images.map(img => (
                    <div key={img.id} className={"img-container"}><Image src={`/${img.image}`} alt={""} width={800} height={500} /></div>
                ))}
            </div>
            <div className={"gov-container"} style={{gap: "8%"}}>
                <div className={"desc-container g"} style={{maxWidth: '50%'}}>
                    <div><Image src={"/abiye.jpg"} className={"image-gov"} alt={""} width={400} height={400}/></div>
                    <div className={"desc-title"} style={{maxWidth: '60%'}}><h2>PM Abiy Ahmed Participation that we want</h2></div>
                    <div>
                        <p className={"desc-text"} style={{maxWidth: "60%"}}>We want PM Abiy Ahmed to support us by giving us some privacy security and office renting for 1 years to fix the current strategy of Ethiopian market to get start with Ethiocommerce. we also need to support by business registration and business licence with all goods and materials types with proper tax rates and with also other types of support needed to start working in Ethiocommerce.</p>
                    </div>

                </div>
                <div className={"desc-container g"} style={{maxWidth: '50%'}}>
                    <div><Image src={"/adanech.jpg"} className={"image-gov"} alt={""} width={400} height={300}/></div>
                    <div className={"desc-title"} style={{maxWidth: '60%'}}><h2>Adanech Ababia Participation that we want</h2></div>
                    <div>
                        <p className={"desc-text"} style={{maxWidth: "60%"}}>We need adanech Ababia to support us by giving us some privileges in addis ababa and to provide us some privacy security guards and with also other types of support needed to start working in Ethiocommerce.</p>
                    </div>

                </div>
            </div>
            <div id={"explore"}>
                <div className={"explore-container"}>
                    <div style={{display: "flex", flexDirection: "row", gap: "30px", alignItems: 'center'}}><Image src={"/pdf.png"} width={30} height={30} alt={"pdf"}/><p>Government partnership proposal</p>
                    </div><a href="/government-proposal.pdf" download="government-proposal.pdf" className={"download"}>Download</a>
                </div>
                <div className={"explore-container"}>
                    <div style={{display: "flex", flexDirection: "row", gap: "30px", alignItems: 'center'}}><Image src={"/ppt.png"} width={30} height={30} alt={"pdf"}/><p>visit our power point to access more</p>
                    </div><Link href={"https://www.canva.com/design/DAHAHehr1bU/M6I7ODkOIPW-ZzI9x-jA4Q/edit?utm_content=DAHAHehr1bU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"} className={"download"} target={"__blank"}>Visit</Link>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "30px", alignItems: 'center'}}>
            <div className={"explore-container"} style={{width: "70%"}}>
                <h3>Contact us</h3>
                <p>We are happy to contact with you.</p>
                <div style={{display: "flex", flexDirection: "row", gap: "30px", justifyContent: 'center'}}>
                    <Link href={"tel:+251986580059"}><button className={"download"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                    </button></Link>
                    <Link href={"mailto:official.ethiocommerce@gmail.com"}><button className={"download"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-envelope-arrow-down" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                            <path
                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
                        </svg>
                    </button></Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Page;
