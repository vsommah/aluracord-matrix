import { Box, Button, Text, TextField, Image, Icon } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['100']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// // Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
    // const username = 'vsommah';
    const [username, setUsername] = React.useState('vsommah');
    const [DadosGit, SetDadosGit] = React.useState('');

    const roteamento = useRouter();
    console.log(roteamento);

    React.useEffect(() => {
        function FetchGit() {
            fetch(`https://api.github.com/users/${username}`)
                .then(async (respostaServidor) => {
                    const respostaEsperada = await respostaServidor.json();
                    SetDadosGit(respostaEsperada);
                })
        };
        FetchGit();
    }, []);

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://cdn.wallpapersafari.com/84/22/Jz6bAs.gif)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '800px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault();
                            console.log('Alguém submeteu o form');
                            //inserindo o username na URL
                            roteamento.push(`/chat?username=${username}`)
                            // window.location.href = '/chat';
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input 
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value)
                                // Onde está o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variárvel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}

                        <TextField
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value)
                                // Onde está o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variárvel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'normal',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                            margin: '5px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                margin: 'auto',
                            }}
                            src={
                                username.length > 2
                                    ? `https://github.com/${username}.png`
                                    : 'https://cdn-icons-png.flaticon.com/512/64/64572.png'
                            }
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                display: "column",
                                textAlign: "center",
                                alignItems: "center",
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '5% 5%',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}

                        </Text>
                    </Box>
                    {/* Photo Area */}

                    {/* Info Git */}

                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '50px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >

                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '10% 10%',
                                margin: 'auto',
                                borderRadius: '50px',
                                textAlign: "center",
                            }}
                        >
                            {DadosGit.bio}

                        </Text>

                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                margin: 'auto',
                                borderRadius: '1000px',
                                textAlign: "center",
                            }}
                        >

                            {DadosGit.location}

                        </Text>
                    </Box>

                    {/* Info Git */}
                </Box>
            </Box>
        </>
    );
}
