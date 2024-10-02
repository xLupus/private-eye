import services from "@/data/services.json";
import { AccessTime, CorporateFare, Email, LocalPhone } from '@mui/icons-material';

export const ContactSection = () => {

    return (
        <section id="Contact"  className="flex items-center justify-center w-full bg-zinc-800 py-7">
            <div className="flex flex-col justify-center items-center max-w-7xl gap-8 p-3 text-gray-100
            ">
                <div className="
                    grid grid-cols-1 gap-10 
                    md:grid-cols-2 md:items-center
                    lg:grid-cols-5
                ">
                    <div className="
                        flex flex-col gap-7 justify-between h-4/6 
                        lg:col-span-3
                    ">
                        <div className="flex flex-col gap-7">
                            <span className="font-bold text-3xl">
                                Contato
                            </span>

                            <span className="text-base">
                                Para mais informações ou para agendar uma consulta, entre em contato conosco pelos seguintes meios:
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <LocalPhone />
                                <span>+55 (11) 12345-6789</span>
                            </div>

                            <div className="flex gap-3">
                                <Email />
                                <span>contato@privateeye.com</span>
                            </div>

                            <div className="flex gap-3">
                                <AccessTime />
                                <span>Atendimento das 6:00 às 18:00, Segunda a Sexta</span>
                            </div>

                            <div className="flex gap-3">
                                <CorporateFare />
                                <span>Baker Street, 221b - 01234-222, São Paulo - SP</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-xl mx-auto
                        lg:col-span-2
                    ">
                        {/* Form */}
                        <form action="#" className="
                            flex flex-col gap-6 bg-white py-7 px-4 text-black rounded-lg
                            lg:w-full lg:max-w-lg
                        ">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm">Nome</label>
                                <input type="text" className="h-10 rounded-lg px-2 border-b border-b-black" placeholder="Digite seu nome" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm">Email</label>
                                <input type="text" className="h-10 rounded-lg px-2 border-b border-b-black" placeholder="Digite seu Email" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm">Telefone</label>
                                <input type="text" className="h-10 rounded-lg px-2 border-b border-b-black" placeholder="(99) 99999-9999" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm">Tipo de Investigação</label>

                                <select name="" id="" className="h-10 rounded-lg px-2 border-b border-b-black bg-transparent">
                                    {services.map(service => (
                                        <option value={service.name} key={service.name}>{service.name}</option>
                                    ))}
                                    <option value="another">Outro</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm">Mensagem</label>
                                <textarea
                                    id=""
                                    rows={10}
                                    placeholder="Digite sua mensagem"
                                    className="h-32 rounded-lg px-2 border-b border-b-black"
                                >
                                </textarea>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Preferencia de Contato</label>

                                <div className="flex flex-wrap gap-3 ">
                                    <div className="flex items-center gap-2">
                                        <input type="radio" id="whatsapp" name="contact" value={'whatsapp'} />
                                        <label htmlFor="whatsapp">Whatsapp</label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <input type="radio" id="email" name="contact" value={'email'} />
                                        <label htmlFor="email">E-mail</label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <input type="radio" id="ligacao" name="contact" value={'ligacao'} />
                                        <label htmlFor="ligacao">Ligação</label>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="bg-blue-600 text-white py-3 rounded-lg">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <span>© 2024 Private Eye Agency</span>
                </div>
            </div>
        </section >
    );
};