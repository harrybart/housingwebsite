import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Card, FlexBox } from '@beyond-ui/react'
import { AiOutlineDown } from "react-icons/ai"
import heroImage from "../assets/images/heroImage2.jpg"

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center px-10 py-4">
            <div className="text-lg font-bold text-ourTheme-offWhite">Housify</div>
            <div>
                <ul className="flex flex-row list-none">
                    <li><NavLink className="mx-3 hover:opacity-50 transition-all duration-300 tracking-wide font-normal text-sm navbar-link" to="/">Home</NavLink></li>
                    <li><NavLink className="mx-3 hover:opacity-50 transition-all duration-300 tracking-wide font-normal text-sm navbar-link" to="/features">Features</NavLink></li>
                    <li><NavLink className="mx-3 hover:opacity-50 transition-all duration-300 tracking-wide font-normal text-sm navbar-link" to="/products">Products</NavLink></li>
                    <li><NavLink className="mx-3 hover:opacity-50 transition-all duration-300 tracking-wide font-normal text-sm navbar-link" to="/testimonials">Testimonials</NavLink></li>
                    <li><NavLink className="mx-3 hover:opacity-50 transition-all duration-300 tracking-wide font-normal text-sm navbar-link" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div>
                {/* <Link to="/login" className="bg-ourTheme-primary-200 py-2 px-4 rounded-lg font-normal text-sm focus:ring-4 ring-ourTheme-primary-200 ring-opacity-25">Login</Link> */}
                <Link to="/login"><Button bgcolor="#1BDDF2" hover={{
                    bgcolor:"#1BCBF2"
                }}>Login</Button></Link>
            </div>
        </nav>
    )
}

const Header = () => {
    return (
        <div className="w-full header rounded-bl-3xl">
            <Navbar/>
            <div className="grid grid-cols-4 h-full pt-20">
                <div className="flex flex-col justify-center items-start px-10 col-span-2">
                    <div className="text-5xl font-extrabold">
                        Find Your Real Estate And Get Your Real Space
                    </div>
                    <p className="mt-6 text-gray-500 text-base">Buy or rent comfortable houses in many places</p>
                </div>
                <div className="col-span-2 h-64">
                    <img src={heroImage} alt="house" className="heroImage w-11/12 object-cover rounded-2xl transform -translate-y-16"/>
                </div>
                <div className="col-span-3 pl-6">
                    <Card color="black" borderRadius="50px" translateY="12">
                        <FlexBox justifyContent="space-between" alignItems="center" paddingHorizontal="10">
                                <FlexBox flexDirection="column" alignItems="center" cursor="pointer">
                                    <FlexBox flexDirection="row" alignItems="center">
                                    <span className="font-bold tracking-wide text-black">Location</span> <AiOutlineDown color="black" className="ml-3"/>
                                    </FlexBox>
                                </FlexBox>
                                <FlexBox flexDirection="column" alignItems="center" cursor="pointer">
                                    <FlexBox flexDirection="row" alignItems="center">
                                    <span className="font-bold tracking-wide text-black">Property-Type</span> <AiOutlineDown color="black" className="ml-3"/>
                                    </FlexBox>
                                </FlexBox>
                                <FlexBox flexDirection="column" alignItems="center" cursor="pointer">
                                    <FlexBox flexDirection="row" alignItems="center">
                                    <span className="font-bold tracking-wide text-black">Average Price</span><AiOutlineDown color="black" className="ml-3"/>
                                    </FlexBox>
                                </FlexBox>
                                <div>
                                    <Button bgcolor="#0a1725" size="lg" hover={{
                                        bgcolor:"gray-900"
                                    }}>Search</Button>
                                </div>
                        </FlexBox>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const Welcome = () => {
    return (
        <div>
            <Header/>
            <div className="bg-white w-full p-6 text-black mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima cum eligendi officiis porro reiciendis itaque natus repudiandae facilis? Enim aperiam dolore consequatur vel nesciunt ipsa quas est! Quibusdam, nisi?
                Alias provident sit repudiandae eum error, adipisci explicabo unde tenetur, sequi vitae similique nisi debitis, quod animi maiores cupiditate voluptate aliquam iusto. Vel officiis dicta dolorem harum voluptas id ipsa?
                Saepe quidem suscipit possimus asperiores ab similique quia consectetur, dolor pariatur cum aspernatur ex accusamus perferendis corporis incidunt sint assumenda in culpa reiciendis molestiae dolores fuga aut earum? Earum, qui.
                Numquam, magnam minus facere repellat consectetur recusandae maiores expedita facilis quas ut odit dolores corporis repellendus laboriosam esse quod officia? Voluptatum maiores quia nam eaque laborum cumque illo porro tempore.
                Voluptatibus iusto sapiente neque minima, doloremque reprehenderit est eaque dolorum, hic dolorem ipsum ex rem soluta eligendi! Consequuntur, delectus hic, exercitationem tenetur odio possimus quaerat dignissimos nihil, doloremque quod veritatis!
                Tenetur esse repellat veniam, ad repudiandae autem fugit deleniti corrupti, dignissimos voluptas ex placeat beatae itaque quod facere sequi temporibus similique? Quis nostrum omnis officia vero minima voluptatum voluptates distinctio.
                Perferendis harum atque illo odio ad ab ipsum, officiis pariatur molestias quidem? Tempora sapiente explicabo quibusdam pariatur perferendis. Aliquam odio quibusdam recusandae tempore earum molestias. Nisi qui ex at voluptatem?
                Maiores maxime suscipit veniam dolor sit quibusdam quisquam labore nemo, porro eveniet natus tempore asperiores amet neque error, deserunt mollitia fugiat placeat sunt qui perspiciatis magnam odio deleniti incidunt. Recusandae.
                Quam eveniet consequatur libero minima eum dolore, rem ea quidem. Culpa doloribus rem quibusdam optio possimus eligendi, consectetur rerum tempore qui aperiam odio officiis delectus reprehenderit nostrum cum omnis laborum.
                Harum incidunt consequuntur praesentium provident, velit, soluta odit reiciendis, non nobis voluptas eaque. Qui, quia adipisci repudiandae cupiditate, accusamus veritatis totam corrupti aliquam sed voluptas eveniet earum laborum fugit illum?
                Similique, accusamus ipsum explicabo dignissimos ea sit voluptatem ducimus iure aliquid labore quos, dolorem cum, nihil laboriosam aperiam neque porro ipsa harum eveniet cupiditate sequi? Reiciendis, aperiam? Possimus, temporibus id.
                Natus, iusto perferendis cumque, sit assumenda, quis sapiente velit reprehenderit inventore id vero nobis laudantium. Ab itaque provident architecto tempora numquam blanditiis dicta totam veritatis nemo. Itaque et unde veritatis.
                At quasi nam vero minus corporis eligendi quae illo illum praesentium nostrum quam asperiores nesciunt, impedit modi temporibus dolores sequi, provident eos dignissimos corrupti maxime facilis velit atque. Cumque, inventore!
                Tempora nostrum modi beatae nam. Esse perferendis, iste nostrum labore at numquam ipsum saepe facere incidunt? Reiciendis id suscipit deleniti beatae soluta corporis corrupti, a amet tempore neque praesentium perspiciatis.
                Dicta molestias necessitatibus voluptatibus possimus totam rerum in! Quam quaerat autem, officiis quo soluta assumenda placeat minus beatae libero similique voluptates, cumque ad ullam praesentium voluptas alias quibusdam eligendi. Voluptate.
                Quasi optio eum qui minus dolorem in impedit nostrum porro explicabo fuga? Minima ex, nobis commodi numquam eveniet enim itaque perspiciatis, magni, explicabo assumenda quibusdam alias eius in ad deleniti?
                Tempore earum dolores voluptate commodi, et assumenda corporis similique consequatur animi provident cumque quam fugit placeat quod distinctio deleniti eum aut a molestiae? Sint ratione voluptates harum voluptatum, adipisci recusandae.
                Inventore quia cumque sapiente nostrum vero, minus rerum ipsum impedit ex. Provident totam facere nobis, veritatis error odio deleniti minus nemo quas explicabo fugiat minima voluptates vitae sequi optio! Corporis.
                Labore sit aliquid pariatur maxime, eum praesentium error suscipit voluptas eius similique esse ipsum magni recusandae sapiente nobis vero ducimus saepe. Eos dolorum repudiandae consequatur velit aperiam quis, temporibus saepe.
                Delectus soluta, sit corporis eaque hic quis impedit ad mollitia. Dolor beatae atque rem mollitia velit? Eveniet placeat, perspiciatis, et beatae soluta autem deserunt eius molestiae ut ab nobis aspernatur!
                Veritatis quibusdam ex ducimus aspernatur tempore nihil modi aliquam eum sint molestias officia accusantium earum obcaecati quaerat architecto quo doloribus dolorum, totam illum aut quia possimus ratione quod beatae! Praesentium!
                Nostrum, vel repudiandae excepturi, dolor amet labore sint totam dolore, soluta perferendis veniam nihil sit ipsum animi quos laborum. Vel quidem earum minima tempore officia repellendus distinctio deleniti quas. Repellendus!
                Velit laudantium hic rem quasi reiciendis consequatur libero iure quam dolores harum placeat consectetur aperiam inventore consequuntur provident illum, quod ullam, optio repellendus unde laborum. Eaque suscipit vero quae ipsum!
                Pariatur, numquam nisi fugit et sapiente eaque assumenda dolor eveniet illum quae dolorem tenetur, debitis odio non. Libero magni vel quaerat. Doloremque laboriosam sit aperiam officiis temporibus ipsum, neque blanditiis.
                Pariatur optio commodi voluptate minus, in possimus tenetur laudantium accusamus quam, cumque esse illo ad blanditiis! Natus aut facere cumque? Aspernatur, fuga possimus ipsum neque eveniet odio. Ad, corporis debitis.
                Consectetur vero laudantium quos et ducimus nisi! Hic, aperiam quam nisi assumenda sed maxime molestiae corporis repellat tenetur, eaque necessitatibus iure sunt vitae tempore nesciunt consectetur molestias, aliquid sit officiis.
                Repellat quia rerum obcaecati voluptatum odit voluptas dolore provident unde quibusdam beatae. Ipsa non exercitationem placeat et doloribus vel cum dicta, deserunt ipsum reiciendis libero tempora natus officia enim nobis?
                Consequatur quas neque debitis ipsum labore quaerat. Ullam, saepe magni reprehenderit quasi, optio iste voluptate labore minus molestias eveniet, facilis provident non fugit quia sequi nemo ipsam sit deleniti hic?
                Aperiam facere reiciendis sint maiores odit iusto atque ullam error! Recusandae omnis modi repudiandae facere labore rerum optio, temporibus harum! Quaerat nesciunt, recusandae unde eaque explicabo minima incidunt iure iste?
                Incidunt, atque distinctio? Cum sunt rerum tempore nulla similique. Repellendus voluptatibus, excepturi quod qui illum perspiciatis eveniet asperiores unde amet eum enim sequi optio doloribus minus. Minus vero repellendus omnis.
                Nemo esse itaque similique error, reprehenderit cumque veniam est nam beatae sint numquam iure provident ullam quod rerum accusamus labore repellendus velit quos illum magnam rem voluptates? Ratione, officia deserunt.
                Excepturi cupiditate quas suscipit nesciunt natus dolore, similique dicta nisi iure quaerat sint id cum in incidunt consequuntur culpa repudiandae, recusandae vel? Sequi vel ullam doloribus corrupti dicta nulla exercitationem!
                Asperiores aspernatur sequi sunt, voluptates praesentium aliquid rem dolor in, eveniet totam, odio consequuntur. Dolores quaerat atque pariatur dolore perspiciatis veniam molestias porro alias consequuntur illo facilis, tempore repellat ullam.
                Temporibus excepturi nostrum aliquid dolores perferendis vel, dignissimos consequatur quas laudantium nesciunt illum minus aspernatur maiores obcaecati iure quisquam dolorem eum et eius ullam voluptatum molestiae culpa! Quod, est nihil?
                Accusantium cumque voluptatum, quam non veniam sapiente eos tempore adipisci omnis est, ipsa temporibus minima. Culpa doloribus atque sint adipisci, qui esse nostrum tenetur, illo quos obcaecati molestiae, perferendis error?
                Eaque pariatur voluptatum vitae, minus totam officia tenetur dicta, quo quos, rerum odio. Nisi quam voluptate, similique cumque quos temporibus pariatur libero repellat quas? Ipsum ullam deleniti nemo atque ea!
                Ipsam autem eum illum maxime ducimus quo quasi laboriosam magnam quas quod ullam inventore provident, velit iste, cumque pariatur voluptates! Rerum nobis libero nam et corporis? Nulla cupiditate adipisci maxime!
                Molestias fugiat corporis quasi laborum quia assumenda quas nostrum incidunt sit facilis, nisi sequi non maxime esse laudantium amet molestiae ratione, minus doloribus architecto? Nemo assumenda quae tenetur hic pariatur.
                Dicta, cupiditate iure repellat a aliquid at recusandae beatae eos! Corporis recusandae hic quaerat consectetur laboriosam suscipit! Asperiores officia voluptatibus est ipsum quasi soluta minima quos possimus, incidunt, dolor placeat.
                Molestiae cum corrupti iure, distinctio veritatis suscipit laudantium assumenda, repudiandae esse ipsam ipsa officiis doloribus! Maxime quis ut numquam reprehenderit expedita nemo dignissimos fugiat modi accusamus repellat. Eveniet, placeat perspiciatis!
                Amet ex doloribus quidem ratione fuga magnam voluptatibus repudiandae quisquam tenetur maxime. Quidem, voluptates. Quasi maxime fugiat excepturi perspiciatis libero? Consectetur voluptates quasi quidem dolorum, dignissimos cupiditate. Reprehenderit, quae magnam.
                Ab nostrum doloribus praesentium, nihil fugit dolorum incidunt temporibus. Odio deleniti quis pariatur nostrum ipsa fuga tempore minima repellendus harum modi officiis aliquid debitis molestias, a dolorem amet non maiores.
                Sequi, nihil sit nam ipsa eveniet totam. Hic quasi animi quos delectus magni at enim soluta odio culpa, facilis iusto quisquam beatae. Ipsum rerum maiores repellat. Facere nemo dolorum possimus.
                Itaque numquam quidem magnam soluta perferendis harum quos aliquid, atque ex tenetur accusantium repellendus obcaecati eius facere voluptatibus laboriosam veritatis! Consequuntur ad eos praesentium hic, totam quia quos temporibus? Dolore!
                Amet eveniet ratione modi repellat eius voluptate natus commodi? Rerum magnam illum nulla minus, iusto velit quae inventore similique magni repudiandae libero, consectetur, eius suscipit! Perferendis illum quae quisquam quod!
                Optio possimus eos suscipit quisquam ab adipisci accusantium, earum molestiae laboriosam cum reprehenderit quas corporis aliquam cupiditate nemo vel id aliquid impedit? Ipsam at recusandae incidunt quae quos velit vero.
                Consequatur enim deleniti adipisci, ipsum doloremque labore obcaecati a nisi error sunt exercitationem nemo illum vitae, cum esse quae quos beatae aliquam, eos consectetur quod? Ducimus magni architecto quibusdam magnam.
                Molestiae placeat dolorem commodi molestias, magni vel alias sapiente quidem, quo ullam error unde repellendus nihil maiores excepturi iusto suscipit veritatis soluta impedit fugiat fugit modi numquam perspiciatis? Nesciunt, minus!
                Perspiciatis ad voluptas tenetur. Laboriosam expedita non et dignissimos quam quod! Natus odio totam, vel ad soluta culpa minus aut dicta consequuntur dolorem esse deleniti quibusdam, voluptatum explicabo illo accusamus?
                Explicabo itaque voluptatem corrupti, dolore rem maiores quia, culpa doloribus autem error nesciunt, obcaecati eius accusamus minima officiis necessitatibus quasi accusantium sed expedita exercitationem iste qui voluptate? Natus, pariatur beatae.
                Hic officiis minima rerum libero nemo doloribus esse eveniet numquam totam, beatae nesciunt impedit temporibus sed soluta veritatis deserunt iste, illum earum omnis excepturi! Sed numquam assumenda repellat recusandae illo!
                Molestias ea at impedit corrupti, optio eligendi eaque mollitia laboriosam neque, repudiandae architecto ex, et non animi minus nostrum sed doloremque velit illum sequi repellat ipsa dolorum? Facere, hic earum?
                Repellat repudiandae eligendi nostrum ea, recusandae quaerat veritatis expedita odio quos possimus facere temporibus vero amet saepe harum quam nihil nobis. Aut sint commodi blanditiis neque totam? Possimus, voluptatibus voluptatem.
                Vero perferendis nam voluptatibus ad et corporis dignissimos quaerat doloribus libero, reprehenderit aperiam similique maiores, odit sed necessitatibus officiis tempora ea eligendi deserunt. Totam recusandae at tempora numquam delectus illo?
                Inventore tempora consequatur ea. Commodi reprehenderit quis fugiat voluptas officiis doloremque deserunt quas, corrupti mollitia quae excepturi magnam tempore placeat voluptates similique molestiae natus voluptatibus deleniti eveniet sequi reiciendis? At?
                Officia ex ducimus voluptates quidem modi, necessitatibus quas facere ab nihil repudiandae impedit iure dolorem perferendis unde sequi tempore ipsam illo corrupti beatae, dicta eligendi eos? Obcaecati consectetur facilis nihil?
                Quas blanditiis provident unde praesentium totam ipsum nulla pariatur in illo! Atque a ut fugiat vero esse facilis aliquam! Rerum labore cum dolor ratione animi optio laboriosam maiores. Molestiae, impedit?
                Nulla beatae maiores sunt commodi et eligendi veritatis reiciendis repellendus sit atque earum ducimus similique iure eius minima facere quaerat natus, accusamus enim architecto debitis doloribus id? Illo, hic incidunt!
                Dolorem dolorum fugit quasi nulla aliquid magnam officia reiciendis non sit vero aut sunt aspernatur laborum harum natus, dignissimos ipsam nemo mollitia perferendis temporibus velit voluptatem! Itaque eaque ipsam inventore?
                Odio aspernatur vel tenetur esse vero tempore corporis, laudantium ipsum, dolorum accusantium sapiente dolorem eligendi consectetur asperiores eveniet odit quam commodi iure! Facilis cum dolor id modi eos! Itaque, est.
                Quam eligendi similique rerum excepturi a perspiciatis dolorum. Voluptatem officia odit quae nesciunt, nihil quam laboriosam maxime! Corporis sunt deserunt nulla odio dicta perferendis quia possimus architecto sed ipsa. At!
                Quibusdam praesentium provident vel officiis reiciendis pariatur nemo asperiores voluptatibus iure quod. Ullam sequi perferendis voluptates magnam quia. Sint nulla velit odio architecto beatae. Repudiandae magni explicabo laborum molestiae natus.
                Harum culpa pariatur optio voluptas. Nam sunt placeat aperiam corrupti. Rem perspiciatis voluptatem impedit ullam quis odio et iste, nemo consectetur quia culpa error non sit omnis optio, autem nostrum!
                Ipsum deleniti culpa sit placeat, vitae voluptate maiores eaque earum tempora deserunt iste consectetur quisquam? Dolorem soluta aspernatur corrupti illum nulla. Possimus doloribus mollitia facilis velit laborum iure rerum cupiditate!
                Mollitia eius amet at sapiente dolorem. Id asperiores sit corrupti repudiandae officia reprehenderit aspernatur quae deleniti saepe ipsum at et voluptate, quo aut molestias ea tenetur quisquam explicabo nobis fuga!
                Dolorem tempore quod, quia placeat consectetur possimus doloremque doloribus qui quos modi debitis voluptates nisi voluptate ut quasi veritatis dolore atque quas voluptatum fugit molestias velit molestiae! Placeat, et corporis!
                Praesentium dolore enim eaque aut corrupti provident labore, voluptas sunt fuga voluptate libero dicta est nihil, rerum cumque voluptatem, optio placeat ea inventore odit totam qui exercitationem a in. Accusamus!
                Maxime voluptas, illo quisquam rerum repellat nemo cumque aperiam, corrupti dicta illum nostrum dolorum, velit at quam quibusdam aspernatur ipsum incidunt eum inventore doloribus! Necessitatibus cum atque veritatis asperiores soluta!
                Amet consectetur minima eos veritatis aperiam voluptatem corporis, temporibus autem deserunt a! Provident sapiente, obcaecati, voluptatem facere labore voluptas repudiandae, aperiam modi iure delectus placeat quidem dolor cumque corporis nesciunt?
                Reiciendis eveniet deleniti officiis delectus cupiditate aliquam sapiente cum voluptate aspernatur id ducimus labore tempora quaerat dignissimos cumque, non perferendis dolore. Iste consequatur illo, facilis aliquid corporis veniam commodi aut.
                Repellendus, autem accusantium, vero delectus consequuntur molestiae deserunt explicabo aspernatur a ipsum assumenda illum accusamus soluta! Officia ut consectetur similique voluptates nihil, corporis veniam at illo iste quisquam mollitia totam?
                Corporis vitae delectus tempora tempore, sit deserunt temporibus commodi voluptates error minus hic nobis, dolor iste illum, dolorem rerum ipsum aspernatur? Aperiam modi reprehenderit minima id quisquam ullam illo harum!
                Dolore molestias aliquid quae! Amet magni at deserunt impedit itaque voluptatum recusandae quae ad eveniet omnis! Optio et possimus laudantium assumenda obcaecati saepe officiis fuga quisquam similique, neque quos! Porro?
                Aspernatur, in aliquam veritatis nostrum distinctio eveniet incidunt cum maxime quis ut neque sint ex nihil deserunt fuga iure fugit quibusdam quo cumque, impedit repellat. Officiis optio assumenda autem aut!
                At eius minima beatae laborum, neque animi architecto ullam, earum ipsa consequatur dignissimos fugiat et quis quidem, officiis magnam nesciunt. Nemo, rerum? Nulla adipisci iste deleniti earum dolores, voluptatibus culpa!
                Pariatur aliquid odit esse eaque ullam, alias ea assumenda sint in fugit quasi quaerat possimus voluptates culpa eum ipsam inventore vero praesentium incidunt. Quaerat eligendi doloremque omnis quisquam veniam incidunt?
                Necessitatibus laudantium distinctio, numquam hic quasi est cum eveniet sequi minus, et facilis! Odit recusandae eos error ipsum harum voluptatem a odio maiores omnis, id aliquam, velit illum dolorem doloremque!
                Ab, quae! Deleniti in amet dolor laudantium vero corrupti voluptatem, eius similique doloribus fugit aspernatur natus, labore sapiente aperiam vitae. Aut harum quae illo quia voluptatum assumenda? Tempore, officiis eveniet!
                Debitis eum magni reprehenderit! Saepe quia rem, ducimus temporibus, eos est nam eaque architecto, blanditiis facere nisi. Provident et voluptatum dolorum sit voluptates error consectetur necessitatibus, laudantium modi iste nesciunt.
                Optio quaerat perspiciatis temporibus molestiae vero magni quam, odio ad molestias excepturi facere nostrum vitae iste dolore ipsa voluptates aperiam, placeat exercitationem illo autem quos, labore praesentium. Consectetur, explicabo sint.
                Id in labore pariatur? Laborum dolores sit perferendis quis alias iste, reiciendis necessitatibus expedita nisi cupiditate animi nam accusantium veniam reprehenderit nulla ipsum laudantium unde quibusdam perspiciatis. Aliquid, neque nihil?
                Pariatur odio tempora vel unde quos adipisci veritatis a minus, repudiandae quae temporibus blanditiis iste odit accusantium quod quia tenetur dicta facere molestiae est at dignissimos impedit ducimus maiores. Alias.
                Itaque non laboriosam autem commodi porro dolor maiores, nisi officiis natus repudiandae veritatis. Maxime, recusandae sapiente! Culpa soluta modi aut reprehenderit, tempora odio autem possimus, officia, est adipisci placeat velit?
                Necessitatibus incidunt facere inventore non laboriosam perspiciatis molestias distinctio est deserunt error expedita aliquid autem nam modi repellendus dicta, exercitationem voluptatem obcaecati! In eligendi, reprehenderit repudiandae fuga provident nihil magni?
                Ipsa numquam maxime inventore amet iusto expedita illo eius eos aspernatur quidem minus qui ea at, cupiditate corrupti consectetur provident, delectus deserunt nostrum sunt esse suscipit sapiente quo pariatur? Labore!
                Possimus optio cum corrupti eveniet eos cupiditate ratione culpa deleniti, quae illo deserunt consectetur sint! Nam excepturi magni velit corrupti adipisci quasi architecto totam aliquid esse, aspernatur officiis ipsam possimus?
                Iure alias itaque officiis? Vitae at doloribus magni quae perspiciatis. Vero quidem quibusdam, animi, cumque aliquid ducimus provident dignissimos minima nostrum amet nobis accusamus deleniti totam temporibus quos earum consequatur.
                Adipisci ipsa quisquam, provident nemo sed nulla ipsam qui voluptas quas cumque dolores a autem neque iusto architecto illum omnis perferendis ducimus at blanditiis dolore labore odit. Amet, aliquam. Totam!
                Adipisci ullam nostrum ducimus facilis laboriosam corrupti maiores minima officia, asperiores autem, assumenda iure qui ex ratione aspernatur modi aperiam labore nam! Deserunt necessitatibus ex asperiores, pariatur delectus ipsam natus!
                Eveniet deserunt laboriosam ipsa voluptas. Nostrum in amet laboriosam sunt laudantium, consectetur voluptates quos earum magni, deleniti atque delectus quae. Odit assumenda, dolor quibusdam harum officia repudiandae est in eaque.
                Eveniet maxime error ipsum sapiente quidem rerum debitis! Accusantium corrupti quibusdam beatae iusto, natus, eligendi cumque dignissimos dicta impedit error consequatur qui. At ducimus itaque repellendus ea exercitationem aut excepturi.
                Maxime possimus iure dolorum nobis modi, ratione, aliquid, neque vel pariatur mollitia vitae voluptas obcaecati? Itaque, aperiam eum consequatur magnam dicta quis nam illum iste incidunt quibusdam exercitationem cumque sunt!
                Reiciendis iure ratione cupiditate praesentium delectus natus, aperiam quas vel magnam modi voluptatum necessitatibus? Praesentium officiis sequi dolor reprehenderit temporibus molestiae ad inventore consequatur. Voluptatum ut neque iusto totam necessitatibus!
                Distinctio, nostrum ipsa. Natus assumenda, quisquam eveniet, impedit qui nobis ab nihil cupiditate ut dolore corporis rem blanditiis sunt tempore illum nostrum velit ex esse! Tenetur repudiandae facilis voluptate odio.
                Ex eaque expedita modi quisquam exercitationem illo accusantium. Labore voluptatibus reiciendis totam aspernatur quo maiores ea, nam optio eligendi corporis sed soluta odit. Commodi obcaecati voluptatem fugit qui numquam quisquam?
                Alias dignissimos in ipsa, dicta vitae, saepe labore, minima dolorum natus aliquam enim numquam! Atque sunt dolore ipsa, ducimus quisquam illum accusantium ad perferendis aliquid ipsam reprehenderit voluptatem provident necessitatibus!
                Nesciunt repellendus laudantium deleniti? Officia odit laudantium, eius doloribus molestias autem modi aliquam ratione a porro velit nulla quisquam! Nobis repudiandae dolore dignissimos dolores, tempore voluptatibus deleniti sed veniam molestiae.
                Neque unde dolore magni iure enim atque, mollitia aperiam possimus ab eos? Vel, mollitia! Facilis hic ratione error magni dolores? Numquam odit voluptatem neque laboriosam! Modi beatae quaerat repellendus totam!
                Consequuntur quia reiciendis quod sunt officia blanditiis sequi ullam alias unde adipisci, aspernatur ratione? Mollitia animi harum maiores? Error doloremque veritatis quisquam veniam illo aperiam facilis quae corporis itaque quasi!
                Officia dolorem soluta pariatur saepe temporibus ab inventore, mollitia dolorum perferendis perspiciatis optio debitis, iste ducimus nostrum laudantium tempora nemo explicabo nobis quo accusantium aliquam. Necessitatibus labore nostrum perspiciatis laboriosam?
            </div>
        </div>
    )
}

export default Welcome;