import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button/Button';
import styles from '../components/Button/Button.module.css';
import Head from 'next/head';

const about = () => {

  return (
    <div id="AboutPage" className="pt-5">
      <Head>
        <title>Solar | Instalación de placas solares | Autoconsumo Solar</title>
         <meta name="description" content="Solar: Instalar placas solares en tu vivienda y solicita las subvenciones. Ahorro de un 50% en la instalación ¡Infórmate sin compromiso! - Autoconsumo Solar" />
        <link rel="icon" href="/img/logo_nav.png" />
      </Head>
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container p-4">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-12">
              <h1 className="display-5"><b>POLÍTICA DE PRIVACIDAD</b></h1>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-5 c-gray-2">
          <br></br><br></br><b><h2 className="c-dark-1">POLÍTICA DE PRIVACIDAD</h2></b><br></br><br></br>


          De conformidad con el Reglamento (UE) 2016/679, del Parlamento Europeo
          y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento
          de datos personales y a la libre circulación de estos datos (Reglamento General de Protección de Datos - RGPD), Juan Manuel Sánchez Martínez,
          informa a los usuarios de la web (en adelante, la Web), acerca del tratamiento de los datos personales, que ellos voluntariamente hayan facilitado durante el
          proceso de registro, acceso y utilización del servicio.


          <br></br><br></br><b className="c-dark-1">1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</b><br></br><br></br>


          Juan Manuel Sánchez Martínez, con CIF/NIF nº: 05332683H y domicilio a efectos de notificaciones en: C/ Játiva, 17, 2ºA, C.P. 28007
          - Madrid (Madrid) (en adelante, el Responsable del Tratamiento), es la entidad responsable del tratamiento de los datos facilitados
          por los clientes de la Web (en adelante, el/los Usuario/s)


          <br></br><br></br><b className="c-dark-1">2. FINALIDAD DEL TRATAMIENTO DE DATOS</b><br></br><br></br>


          Para proceder al registro, acceso, servicios de asesoramiento y posterior uso de la Web, el Usuario deberá facilitar
          -de forma voluntaria-, datos de carácter personal (esencialmente, identificativos, de contacto y datos de consumo), los cuales serán
          incorporados a soportes automatizados titularidad del Responsable del Tratamiento.

          Sus datos personales se pueden ofrecer a empresas
          encargadas de prestar servicios al Responsable del tratamiento (“Subcontratadas”) y que están vinculadas a la misma por contrato escrito.
          Solo pueden tratar sus datos personales para los objetivos estipulados de solicitud de presupuesto y presta de servicios de asesoramiento
          e instalación de medidas de ahorro energético y sostenibilidad ambiental, y no están autorizadas a tratarlos, directa o indirectamente,
          para cualquier otra finalidad, ya sea en beneficio propio o de terceros.

          La recogida, almacenamiento, modificación,
          estructuración y en su caso, eliminación, de los datos proporcionados por los Usuarios, constituirán operaciones de tratamiento llevadas
          a cabo por el Responsable, con la finalidad de garantizar el correcto funcionamiento de la Web, mantener la relación
          de prestación de servicios y/o comercial con el Usuario, y para la gestión, administración, información, prestación y mejora del servicio.


          Los datos personales facilitados por el Usuario -especialmente, el correo electrónico o e-mail y el número de teléfono- podrán emplearse
          también para remitir boletines (newsletters), así como comunicaciones comerciales de promociones y/o publicidad de la
          Web, siempre y cuando, el Usuario haya prestado previamente su consentimiento expreso para la recepción de
          estas comunicaciones vía electrónica o teléfonica.

          La Web utiliza servicios de terceros que pueden recopilar información utilizada
          para identificarlo.

          Enlace a la política de privacidad de los proveedores de servicios externos utilizados por la web:


          <ul className='mt-3'>
            <li><a href="https://firebase.google.com/policies/analytics" className="text-primary">Google Analytics for Firebase</a></li>
          </ul>



          <br></br><br></br><b className="c-dark-1">3. LEGITIMACIÓN</b><br></br><br></br>


          El tratamiento de los datos del Usuario, se realiza con las siguientes bases jurídicas que legitiman el mismo:

          • La solicitud de información
          y/o la contratación de los servicios de la Web, cuyos términos y condiciones se pondrán a disposición del Usuario en todo caso, con
          carácter previo, para su expresa aceptación.

          • El consentimiento libre, específico, informado e inequívoco del Usuario, poniendo
          a su disposición la presente política de privacidad, que deberá aceptar mediante una declaración o una clara acción
          afirmativa, como el marcado de una casilla dispuesta al efecto.

          En caso de que el Usuario no facilite al Responsable del Tratamiento
          sus datos, o lo haga de forma errónea o incompleta, no será posible proceder al uso de la Web.



          <br></br><br></br><b className="c-dark-1">4. CONSERVACIÓN DE LOS DATOS PERSONALES</b><br></br><br></br>

          Los datos personales proporcionados por el Usuario, se conservarán
          en los sistemas y bases de datos del Responsable del Tratamiento, mientras aquél continúe haciendo uso de la Web,
          y siempre que no solicite su supresión.

          Con el objetivo de depurar las posibles responsabilidades derivadas del tratamiento,
          los datos se conservarán por un período mínimo de cinco años.


          <br></br><br></br><b className="c-dark-1">5. DESTINATARIOS</b><br></br><br></br>

          Los datos no se comunicarán a ningún
          tercero ajeno al Responsable del Tratamiento, salvo obligación legal o en cualquier caso, para los objetivos estipulados en la presente
          política de privacidad, previa solicitud del consentimiento del Usuario.


          Por otra parte, el Responsable del Tratamiento podrá dar acceso o transmitir los datos personales facilitados por el Usuario,
          a terceros proveedores de servicios, con los que haya suscrito acuerdos de encargo de tratamiento de datos, y
          que únicamente accedan a dicha información para prestar un servicio en favor y por cuenta del Responsable.


          <br></br><br></br><b className="c-dark-1">6. RETENCIÓN DE DATOS</b><br></br><br></br>


          El Responsable del Tratamiento, informa al Usuario de que, como prestador de servicio de alojamiento de datos y en virtud de lo establecido
          en la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), retiene por un
          período máximo de 12 meses la información imprescindible para identificar el origen de los datos alojados y el momento en que
          se inició la prestación del servicio.

          La retención de estos datos no afecta al secreto de las comunicaciones y sólo podrán
          ser utilizados en el marco de una investigación criminal o para la salvaguardia de la seguridad pública, poniéndose a disposición
          de los jueces y/o tribunales o del Ministerio que así los requiera.

          La comunicación de datos a las Fuerzas y Cuerpos de Seguridad
          del Estado, se hará en virtud de lo dispuesto por la normativa sobre protección de datos personales, y bajo el máximo respeto a la misma.



          <br></br><br></br><b className="c-dark-1">7. PROTECCIÓN DE LA INFORMACIÓN ALOJADA</b><br></br><br></br>

          El Responsable del Tratamiento, adopta las medidas necesarias para garantizar
          la seguridad, integridad y confidencialidad de los datos conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento
          Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de
          datos personales y a la libre circulación de los mismos.

          Si bien el Responsable, realiza copias de seguridad de los contenidos alojados
          en sus servidores, sin embargo no se responsabiliza de la pérdida o el borrado accidental de los datos por parte de los Usuarios.
          De igual manera, no garantiza la reposición total de los datos borrados por los Usuarios, ya que los citados datos podrían haber sido
          suprimidos y/o modificados durante el periodo de tiempo transcurrido desde la última copia de seguridad.

          Los servicios facilitados
          o prestados a través de la Web, excepto los servicios específicos de backup, no incluyen la reposición de los contenidos conservados
          en las copias de seguridad realizadas por el Responsable del Tratamiento, cuando esta pérdida sea imputable al usuario; en este caso,
          se determinará una tarifa acorde a la complejidad y volumen de la recuperación, siempre previa aceptación del usuario.
          La reposición de datos borrados sólo está incluida en el precio del servicio cuando la pérdida del contenido sea debida a
          causas atribuibles al Responsable.


          <br></br><br></br><b className="c-dark-1">8. EJERCICIO DE DERECHOS</b><br></br><br></br>

          El Responsable del Tratamiento, informa al Usuario
          de que le asisten los derechos de acceso, rectificación, limitación, supresión, oposición y portabilidad, los cuales podrá ejercitar
          mediante petición dirigida al correo electrónico: aikideveloper@gmail.com.

          Asimismo, el Usuario tiene derecho a revocar el
          consentimiento inicialmente prestado, y a interponer reclamaciones de derechos frente a la Agencia Española de Protección de
          Datos (AEPD).


          <br></br><br></br><b className="c-dark-1">9. COMUNICACIONES COMERCIALES POR VÍA ELECTRÓNICA O TELEFÓNICA</b><br></br><br></br>

          En aplicación de la LSSI (Ley de Servicios de la
          Sociedad de la Información), el Responsable del Tratamiento, no enviará comunicaciones publicitarias o promocionales por vía telefónica o
          vía correo electrónico u otro medio de comunicación electrónica equivalente que previamente no hubieran sido solicitadas o expresamente
          autorizadas por los destinatarios de las mismas.

          En el caso de usuarios con los que exista una relación contractual, jurídica
          o de servicios previa, el Responsable del Tratamiento, sí está autorizado al envío de comunicaciones comerciales referentes a
          productos o servicios del Responsable que sean similares a los que inicialmente fueron objeto de contratación con el cliente.


          En caso de que el Usuario quiera darse de baja a la hora de recibir las citadas comunicaciones, podrá hacerlo remitiendo su voluntad
          por e-mail al correo electrónico: aikideveloper@gmail.com.


          Fecha última actualización: 12/01/2022





          <br></br><br></br><b className="c-dark-1">CONDICIONES GENERALES DE USO</b><br></br><br></br>


          <br></br><br></br><b className="c-dark-1">1. TITULARIDAD</b><br></br><br></br>

          El presente documento tiene por objeto establecer las condiciones generales de uso de la
          web (en adelante, la Web), titularidad de Juan Manuel Sánchez Martínez, con CIF/NIF nº: 05332683H y domicilio a efectos de notificaciones en: C/ Játiva, 17, 2ºA, C.P. 28007 - Madrid (Madrid)
          (en adelante, el Propietario).

          El registro y posterior uso de la Web, requiere la aceptación previa por parte del usuario,
          de las condiciones generales de uso vigentes. El Propietario se reserva el derecho de modificar las presentes condiciones, en cualquier
          momento, si bien dichos cambios serán debidamente informados para el conocimiento por parte del usuario.

          El uso de la web, atribuye la condición de usuario de la misma (en adelante, el Usuario) e implica la lectura, entendimiento y aceptación de todos los términos
          y condiciones recogidos por el presente documento.

          No obstante, el Usuario deberá revisar periódicamente las publicaciones relativas
          a los cambios efectuados en las condiciones de uso, y si aquél continúa utilizando la Web, se entenderá que ello implica la
          aceptación y asunción de dichos cambios.

          Las presentes condiciones de uso, afectan a tus derechos y obligaciones legales respecto
          al uso de la Web. Si no aceptas los términos incluidos en las mismas, no debes registrarte, acceder, ni utilizar la Web.



          <br></br><br></br><b className="c-dark-1">2. MENORES DE EDAD</b><br></br><br></br>

          De conformidad con las disposiciones vigentes en materia de protección de datos personales,
          y en aras a proteger la privacidad de los menores de edad, se informa de que el Usuario debe ser mayor de catorce (14) años
          o disponer de autorización expresa de sus padres y/o tutores legales, para poder registrarse, acceder y utilizar la presente Web.


          A tal fin, el Propietario podrá ponerse en contacto con el Usuario en cualquier momento para que acredite su identidad y la edad real
          que le habilitaría para el uso de la Web, o bien para que demuestre disponer de autorización de sus padres y/o tutores legales.


          Entre los documentos que el Propietario podrá solicitar al Usuario para acreditar los puntos anteriormente señalados, se encontrarían
          una copia de su DNI, así como otros documentos complementarios que sean necesarios para que el Propietario verifique la edad real del Usuario.
          En caso de que el Propietario solicite la citada documentación al Usuario, y éste se niegue a aportarla, el Propietario podrá dar de baja
          de la Web al Usuario.


          <br></br><br></br><b className="c-dark-1">3. DERECHOS DE PROPIEDAD INTELECTUAL</b><br></br><br></br>

          La Web es una obra compuesta de diversos elementos
          integrados e inseparables (texto, ilustraciones, fotografías, imágenes animadas, vídeos, programas de ordenador, etc.),
          cuyos derechos de propiedad intelectual, en virtud de lo dispuesto por la normativa vigente en la materia, corresponden al Propietario,
          salvo en lo referente a aquellos materiales obtenidos bajo licencia, autorización o consentimiento de terceros.

          El Propietario y los
          terceros licenciantes, retendrán en todo momento los derechos de propiedad intelectual sobre la Web, así como sobre los diferentes
          elementos que la componen, considerados de forma individual, en todas las copias que se realicen (cualquiera que sea el soporte
          al que se incorporen), concediendo sobre los mismos únicamente el derecho de uso.

          Cualquier derecho que no sea expresamente cedido,
          se entenderá reservado en favor del Propietario y los licenciantes de contenidos o elementos individuales. El Propietario dispone de los
          derechos de propiedad intelectual y de explotación sobre el software empleado para el desarrollo y funcionamiento de la Web,
          y estará habilitado para descargar e instalar nuevas versiones del software de la Web, actualizaciones y mejoras, con el fin
          de perfeccionar las funcionalidades del servicio. El usuario no adquiere derecho alguno o licencia por el servicio contratado, sobre
          el software necesario para la prestación del servicio, ni tampoco sobre la información técnica de seguimiento del servicio, a
          excepción de los derechos y licencias necesarios para la utilización y correcto funcionamiento de la Web. Además de lo anterior,
          el Propietario es responsable de la selección, diseño de la estructura y disposición de los contenidos de la Web, así como quien
          ha tomado la iniciativa y asumido el riesgo de efectuar las inversiones sustanciales orientadas a la obtención, digitalización y
          presentación de la misma, correspondiéndole, por tanto, la protección que la Ley de Propiedad Intelectual (LPI) pueda conceder sobre
          dicha disposición y estructuración de datos.

          El Propietario es también el único titular del diseño e imagen gráfica de la Web,
          reservándose las acciones que legalmente le correspondan contra las personas que pudieran realizar imitaciones o usos desleales de la misma.



          <br></br><br></br><b className="c-dark-1">4. DERECHOS DEL USUARIO</b><br></br><br></br>

          Respecto a los posibles contenidos generados por el usuario, durante el uso de la Web,
          aquél será el único titular de los derechos de propiedad intelectual sobre dichos contenidos. No obstante, cuando el Usuario comparta,
          difunda o publique contenidos en la Web, está concediendo una licencia no exclusiva, transferible y gratuita, para poder almacenar,
          reproducir, distribuir, modificar, mantener o comunicar públicamente (difundir, publicar) el contenido generado por el Usuario.


          En el supuesto de que el Usuario, comparta o publique contenidos en la Web, que no haya creado o generado él mismo, será el único
          responsable de haber obtenido previamente las correspondientes autorizaciones por parte de los legítimos autores de los citados contenidos.


          En cualquier caso, el Propietario informa al Usuario de que, aunque el contenido pueda ser eliminado de la interfaz de la Web,
          éste puede conservarse en las copias de seguridad del Propietario durante un cierto tiempo, para después ser suprimido de forma efectiva.


          Asimismo, cabe mencionar que el contenido puede seguir siendo visible si se ha compartido con otros usuarios, y éstos han llegado a
          descargar o guardar dicho contenido, excediendo estas actuaciones del ámbito o entorno de la Web.


          <br></br><br></br><b className="c-dark-1">5. OBLIGACIONES DEL USUARIO</b><br></br><br></br>


          El Usuario se compromete a utilizar la presente Web y todo su contenido de conformidad con la ley, la moral, el orden público y
          las presentes condiciones de uso. Asimismo, se compromete a hacer un uso adecuado de los servicios y/o contenidos de la web.


          En particular, el Usuario se compromete a:

          • No emplear la Web para realizar actividades ilícitas o constitutivas de delito,
          que atenten contra los derechos de terceros y/o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera
          otras normas del ordenamiento jurídico aplicable.

          • No transmitir, introducir, difundir y poner a disposición de terceros, cualquier
          tipo de material e información (datos contenidos, mensajes, dibujos, archivos de sonido e imagen, fotografías, software, etc.), a
          través de la Web, que sean contrarios a la ley, la moral, el orden público y las presentes condiciones de uso.

          • No generar,
          compartir o subir contenidos a la Web, si son ilegales, engañosos, o discriminatorios, o si vulneran los derechos de otra persona.


          • La publicación o transmisión de cualquier contenido que resulte violento, obsceno, abusivo, racial, xenófobo o difamatorio.


          • No introducir o subir virus o códigos maliciosos, o realizar actividades susceptibles de alterar el correcto funcionamiento de la Web.


          • No recoger ni utilizar datos personales (incluida la imagen física) de otros usuarios sin su consentimiento expreso o contraviniendo
          lo dispuesto en el Reglamento General de Protección de Datos.

          La infracción de cualquiera de las normas contenidas en este apartado,
          facultará al Propietario, para dar de baja de la Web al usuario de manera inmediata, así como para eliminar contenidos generados
          por el usuario, que puedan atentar contra los derechos de terceros, resultar inadecuados o ser contrarios al orden jurídico.



          <br></br><br></br><b className="c-dark-1">6. LIMITACIÓN DE RESPONSABILIDAD</b><br></br><br></br>

          El Propietario no garantiza que, durante el uso de la Web, no puedan producirse
          fallos o errores que dificulten el uso del servicio, generen imperfecciones, problemas o retrasos en el sistema.


          Siempre que el Propietario haya actuado con la diligencia oportuna y necesaria, no asumirá responsabilidad alguna por: pérdidas no
          provocadas por infracción del Propietario, de lo dispuesto en las presentes condiciones; pérdidas no previsibles de forma razonable
          por ninguna de las partes; contenidos difundidos o publicados por otros usuarios, cuando vulneren derechos de terceros, o se trate de
          contenido ilegal, violento, ofensivo o inapropiado.


          <br></br><br></br><b className="c-dark-1">7. PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL</b><br></br><br></br>

          De conformidad con el
          Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas
          en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (Reglamento General de Protección de Datos -
          RGPD), toda información o datos de carácter personal que el Usuario facilite a través de la utilización de la presente App, serán tratados
          de acuerdo a lo establecido en nuestra Política de Privacidad.


          <br></br><br></br><b className="c-dark-1">8. MODIFICACIONES</b><br></br><br></br>

          El Propietario se reserva el derecho a
          efectuar, sin previo aviso, las modificaciones que considere oportunas para el correcto funcionamiento de la Web, pudiendo cambiar,
          suprimir o añadir tanto los contenidos y servicios que se prestan a través de la misma, como la forma en la que éstos aparecen presentados
          o localizados.

          El Propietario intentará, en la medida de lo posible, mantener actualizada y libre de fallos la información contenida
          en la presente Web, si bien, en cualquier caso, el acceso y utilización de la misma es responsabilidad exclusiva del Usuario.



          <br></br><br></br><b className="c-dark-1">9. ACCIONES LEGALES</b><br></br><br></br>

          En caso de incumplimiento por parte del Usuario, de los términos incluidos en las presentes
          condiciones de uso, el Propietario estará habilitado para iniciar las acciones legales que, conforme a la legislación vigente,
          puedan resultar oportunas, así como a solicitar las indemnizaciones pertinentes por parte del Usuario.

          El Propietario perseguirá
          cualquier utilización indebida de la Web o de sus contenidos así como las infracciones de los derechos que le correspondan a
          él o a sus licenciantes, especialmente en lo relativo a los derechos de propiedad intelectual e industrial.



          Fecha última actualización: 12/01/2022



        </div>
      </section>
    </div>
  );
};

export default about;
