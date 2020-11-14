import React from 'react'
import Text from '../../components/text'

export function MetodaDePlataContainer() {
    return (
        <Text>
            <Text.ParagraphTitle>
                Metode de Plata
            </Text.ParagraphTitle>
            <Text.Paragraph bold={700}>
                Ramburs (cash) la livrarea coletului
            </Text.Paragraph>
            <Text.Paragraph>
                Contravaloarea produselor si a serviciilor comandate pot fi achitate curierului chiar la livrarea acestora la adresa specificata de dumneavoastra.
            </Text.Paragraph>
            <Text.Paragraph bold={700}>
                Transfer bancar
            </Text.Paragraph>
            <Text.Paragraph>
                Plata se poate face si prin virament bancar pe baza facturii proforme, livrarea produselor urmand a se face dupa intrarea sumei (contravaloarea totala a facturii) in contul nostru.
            </Text.Paragraph>
            <Text.Paragraph>
                Datele necesare pentru efectuarea platii prin transfer bancar sunt:
            </Text.Paragraph>
            <Text.List>
                <Text.ListItem>SC ,,,,,,,,,,,,,,,,,,,,, SRL</Text.ListItem>
                <Text.ListItem>CUI RO ,,,,,,,,,,,,,</Text.ListItem>
                <Text.ListItem>Nr. Reg.Com. ,,,,,,,,,,,,,,,,,,,,,</Text.ListItem>
                <Text.ListItem>Sediul social: ,,,,,,,,,,,,,,,,,,,,,,,,,,,</Text.ListItem>
                <Text.ListItem>Banca,,,,,,,,,,,,,,,, Cont IBAN:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,</Text.ListItem>
            </Text.List>
            <Text.Paragraph bold={700}>
                Prin Card bancar
            </Text.Paragraph>
            <Text.Paragraph>
                Pentru platile cu carduri de credit/debit emise sub sigla Visa si MasterCard (Visa/Visa Electron si Mastercard/Maestro) este folosit sistemul 3D Secure elaborat de serviciul ePayment. Acest sistem asigura tranzactiilor online acelasi nivel de securitate ca si cele realizate la bancomat sau in mediul fizic, la comerciant. 3D Secure asigura in primul rand ca nici o informatie legata de cardul tau nu este transferata sau stocata, la nici un moment de timp, pe serverele ElectroFun sau pe serverele ePayment, aceste date fiind direct introduse in sistemele Visa si MasterCard. In plus, 3D Secure este un sistem de autentificare a identitatii posesorilor de carduri in mediu electronic. Procesul de autentificare a posesorului cardului se face pe baza codului de securitate cunoscut numai de posesor si se desfasoara numai pe serverele Visa sau MasterCard, dupa caz. Sistemul 3D Secure permite efectuarea de cumparaturi on-line cu orice card emis sub licenta Visa sau MasterCard, inclusiv cele de debit si cele electronice Maestro si Visa Electron. Sunt acceptate si cardurile virtuale emise de aceste organizatii.
            </Text.Paragraph>
        </Text>
    )
}
