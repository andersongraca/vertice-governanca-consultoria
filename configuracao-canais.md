# Ativação de canais comerciais — Vértice Governança de TI

Os ícones de e-mail, Instagram e LinkedIn já estão disponíveis no rodapé, mas permanecem em estado de configuração até o preenchimento dos dados oficiais no componente `client/src/components/ContactChannels.tsx`.

| Canal | Dado necessário | Onde será aplicado |
| --- | --- | --- |
| E-mail comercial | Endereço de e-mail oficial | Ícone de e-mail, mensagens de confirmação e canal de retorno do diagnóstico |
| Instagram | URL pública do perfil | Ícone do Instagram no rodapé |
| LinkedIn | URL da página da empresa ou dos perfis dos sócios | Ícone do LinkedIn no rodapé |
| CAPTCHA robusto | Chave de site e chave secreta de um provedor, como Cloudflare Turnstile | Formulários de diagnóstico e contato |

> A proteção atual combina campo-isca, tempo mínimo de preenchimento, pergunta de verificação e aceite de privacidade. Ela reduz envio automatizado no navegador, mas uma validação robusta de CAPTCHA exige verificação em servidor quando o formulário passar a enviar dados automaticamente.
