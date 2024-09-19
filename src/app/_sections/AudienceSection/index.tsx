import { Card } from "@/components/Card";
import PersonImage from "@/assets/images/audience/person.webp";
import BussinessImage from "@/assets/images/audience/company.webp";
import LawyerImage from "@/assets/images/audience/lawyer.webp";

export const AudienceSection = () => {
    return (
        <section className="
            flex flex-col gap-7 items-center px-3 w-full max-w-7xl bg
            lg:max-w-6xl
            xl:max-w-7xl xl:grid xl:grid-cols-3 xl:items-start xl:gap-5
        ">
            <Card.Root>
                <Card.Image src={PersonImage} alt="" className="w-full h-full xl:h-fit"/>

                <Card.Body>
                    <Card.Header>
                        <Card.Title title="Indivíduos e Famílias" />
                    </Card.Header>

                    <Card.Content>
                        <span>
                            Se você está enfrentando uma situação pessoal delicada e precisa de respostas confiáveis, oferecemos serviços discretos e profissionais para ajudá-lo a resolver seus problemas e lhe trazer clareza.
                        </span>

                        <span>
                            Seja lidando com questões conjugais, preocupações com a segurança de seus filhos ou a necessidade de localizar um ente querido desaparecido, nossa equipe está preparada para fornecer assistência personalizada e confiável.
                        </span>
                    </Card.Content>
                </Card.Body>
            </Card.Root>

            <Card.Root>
                <Card.Image src={BussinessImage} alt="" className="w-full h-full xl:h-fit" />

                <Card.Body>
                    <Card.Header>
                        <Card.Title title="Empresas" />
                    </Card.Header>

                    <Card.Content>
                        <span>
                            Empresas que enfrentam problemas internos, como suspeitas de fraude, roubo de propriedade intelectual ou comportamento anti ético, podem confiar em nossa experiência em investigação empresarial. Nossa equipe pode ajudá-lo a proteger seus negócios e seus ativos, possibilitando-o uma tomada de decisões informadas e estratégicas.
                        </span>

                        <span>
                            Seja qual for o seu desafio, estamos aqui para oferecer soluções sob medida para suas necessidades corporativas.
                        </span>
                    </Card.Content>
                </Card.Body>
            </Card.Root>

            <Card.Root>
                <Card.Image src={LawyerImage} alt="" className="w-full h-full xl:h-fit" />

                <Card.Body>
                    <Card.Header>
                        <Card.Title title="Advogados" />
                    </Card.Header>

                    <Card.Content>
                        <span>
                            Advogados que necessitam de provas sólidas e admissíveis em tribunal podem contar com nossos serviços de investigação.
                        </span>

                        <span>
                            Seja em questões de direito civil ou criminal, estamos comprometidos em fornecer resultados precisos e confiáveis que ajudarão a fortalecer sua posição legal diante um tribunal. Confie em nós para fornecer o suporte necessário para seus clientes.
                        </span>
                    </Card.Content>
                </Card.Body>
            </Card.Root>
        </section>
    );
};