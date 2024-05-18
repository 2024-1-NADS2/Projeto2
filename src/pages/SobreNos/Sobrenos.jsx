import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import Conteudo from '../../components/Conteudo/Conteudo.jsx';
import Card from '../../components/Card/Card.jsx';
import style from './style.css';


export default function Sobrenos() {
    return (
        <>
            <Cabecalho />
            <Menu />
            <Conteudo>
              <section className='container-cards-SN'>
                    <Card>
                        <div className="container-dados-SN">
<p>sssssssssssssssssssssssssssssssssss</p>
                        </div>
                    </Card>
                    <Card>
                    <div className="container-dados-SN">

</div>

                    </Card>
                    <Card>
                    <div className="container-dados-SN">

</div>

                    </Card>
                </section>

            </Conteudo>
        </>

    )

}