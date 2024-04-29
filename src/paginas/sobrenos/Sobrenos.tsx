import { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import sn1 from '../../assets/sn1.png'
import sn2 from '../../assets/sn2.png'
import sn3 from '../../assets/sn3.png'

function Sobrenos() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-start items-left mb-auto" style={{ paddingTop: '70px',}}>
        <div>
        <section className="flex flex-col md:flex-row items-left mt-8">
          <div className="md:w-1/2 justify-start">
          <h1 className="text-3xl font-bold mt-8 ">Sobre Nós</h1>
          <b></b>
          <div className="text-xl">
            <p>Seja bem-vinde à Abstifree, seu aliado na jornada para superar o vício em substâncias lícitas e ilícitas.</p>
            <p>O uso excessivo dessas drogas tem gerado desequilíbrios sociais que afetam todas as idades, desde tenra idade até a terceira idade. </p>
            <p>É cada vez mais comum ver o conhecimento e o uso dessas substâncias penetrando na vida dos indivíduos precocemente e persistindo ao longo dos anos. </p>
            <p>Na Abstifree, estamos comprometidos em combater o uso de drogas como nicotina, álcool, crack, entre outras, por meio de um atendimento humanizado, respeitoso e dedicado. </p>
            <p>Estamos aqui para apoiá-lo em sua jornada rumo à recuperação e ao bem-estar.</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <img src={sn1} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />           </div>
        </section>
        <section className="flex flex-col md:flex-row items-center my-8">
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <img src={sn2} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />           </div>
          <div className="md:w-1/2 order-1 md:order-2">
          <h3 className="text-3xl font-bold my-6 flex-row flex-row-reverse">Nossa Missão</h3>
          <div className="text-xl">
            <p> Na Abstifree, nossa missão está alinhada com a terceira meta de desenvolvimento sustentável (ODS) da ONU, especialmente focada no combate ao uso abusivo de substâncias entorpecentes, conforme mencionado anteriormente.</p>
            <p>Nossa prioridade é promover a assistência humanitária em nossas farmácias, oferecendo apoio integral aos indivíduos que buscam ajuda através dos produtos disponíveis em nossa plataforma.</p>
            <p>Ao fazê-lo, não apenas fornecemos soluções tangíveis, mas também apoio emocional, demonstrando nosso compromisso com a melhoria da qualidade de vida e bem-estar de nossos clientes. </p>
            <p>Nosso compromisso transcende a esfera comercial, englobando a contribuição para o bem-estar da sociedade como um todo.</p>
            <p>Por que uma farmácia voltada para produtos que combatem o vício de entorpecentes ? E como ela se relaciona a ODS da ONU ?</p>
            <p>A escolha de focarmos em produtos que combatem o vício em entorpecentes é motivada por nossa consciência do impacto prejudicial que o abuso de substâncias tem na sociedade. </p>
            <p>Independentemente da droga em questão, suas consequências podem ser devastadoras. Por exemplo, o uso excessivo de álcool está associado a mais de XX% dos acidentes automobilísticos, especialmente em datas festivas como Carnaval, Natal e Ano Novo.</p>
            <p>Diante desse cenário, vemos uma oportunidade de contribuir para a resolução desse problema e de muitos outros. Nossa abordagem é acessível e humanizada, reconhecendo que cada indivíduo tem uma história única por trás do vício. </p>
            <p>Nosso compromisso é oferecer suporte e conscientização para ajudar a retardar o uso dessas substâncias.
o optarmos por esse projeto, reafirmamos nosso compromisso com a saúde e o bem-estar da comunidade, buscando uma abordagem que não apenas trate os sintomas, mas também aborde as raízes do problema de forma holística e compassiva.</p>
</div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center my-8">
          <div className="md:w-1/2 justify-start">
            <h3 className="text-3xl font-bold my-6 ">Junte-se a Nós</h3>
            <div className="text-xl">
            <p className="">Torne - se um agente de mudanças positivas !</p>
            <p>Cada compra realizada na Abstifree representa um passo significativo em direção à redução dos excessos, contribuindo para que menos pessoas sejam dominadas por seus vícios e para uma sociedade mais livre em seu verdadeiro sentido. </p>
            <p>Demonstrando nosso compromisso com a sustentabilidade social, destinamos 10% do valor total de cada venda para financiar instituições engajadas em projetos sociais voltados para esse segmento. </p>
            <p>Essa iniciativa une o comércio eletrônico e a responsabilidade social como parceiros, incentivando a colaboração em prol do bem-estar, saúde e liberdade de muitos.</p>
            <p>Ao optar por fazer suas compras conosco, você não apenas adquire produtos de qualidade, mas também se torna um agente de mudança positiva.</p>
            <p>Juntos, estamos construindo um futuro mais inclusivo e saudável para todos, demonstrando que a sustentabilidade pode e deve ser parte integrante de qualquer negócio, mesmo no contexto do comércio eletrônico.</p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src={sn3} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />          </div>
        </section>

        <h3 className="text-3xl font-bold my-6  text-yellow-950">Transforme seus hábitos, transforme o mundo!</h3>
        <div className='flex'>

        </div>

        </div>
      
      </div>
      <div className="fixed bottom-0 w-full">
      <Footer></Footer>
      </div>
    </>
  );
}

export default Sobrenos;
