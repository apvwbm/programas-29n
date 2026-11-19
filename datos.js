/* Datos de la web. Se puede editar a mano: cada partido tiene su ficha, sus medidas por tema
   (breve = frase del modo rápido; clave = las que se comparan; mas = el resto) y sus indicadores ideológicos (ejes, de -2 a +2). */
const TEMAS = [{"id": "vivienda", "name": "Vivienda"}, {"id": "empleo", "name": "Empleo y salarios"}, {"id": "impuestos", "name": "Impuestos y cuentas públicas"}, {"id": "pensiones", "name": "Pensiones y protección social"}, {"id": "sanidad", "name": "Sanidad"}, {"id": "educacion", "name": "Educación"}, {"id": "inmigracion", "name": "Inmigración"}, {"id": "energia", "name": "Energía, clima y transporte"}, {"id": "economia", "name": "Economía, industria y campo"}, {"id": "igualdad", "name": "Igualdad, familia y derechos"}, {"id": "seguridad", "name": "Seguridad y justicia"}, {"id": "exterior", "name": "Política exterior y defensa"}, {"id": "estado", "name": "Modelo de Estado e instituciones"}];

const PARTIDOS = [
{
 "id": "psoe",
 "name": "PSOE",
 "nombre": "Partido Socialista Obrero Español",
 "ambito": "Estatal",
 "doc": "La fuerza de seguir avanzando",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "114 páginas, unos 500 compromisos numerados",
 "idioma": "Castellano",
 "estructura": [
  "Modelo económico",
  "Vivienda",
  "Salarios, trabajo y desigualdad",
  "Estado de bienestar",
  "Cambio climático y transición verde",
  "Igualdad de las mujeres",
  "Calidad democrática, convivencia y derechos",
  "Acción exterior y defensa"
 ],
 "resumen": "Combina un balance de la acción de gobierno desde 2018 con 500 compromisos numerados en ocho bloques. Pone el foco en la vivienda (1 % del PIB anual y un parque público estatal), los salarios y la reducción de jornada, y un Estado de bienestar financiado con más impuestos a las rentas del capital, los grandes patrimonios y las grandes tecnológicas. Completa el programa con la transición energética y la ampliación de derechos feministas, LGTBI y digitales.",
 "esencial": [
  "Reforzar el parque público de vivienda y considerar la vivienda un derecho fundamental",
  "Reducir la jornada y garantizar por ley un salario mínimo ligado al salario medio",
  "Estado de bienestar financiado con impuestos a las rentas del capital y a grandes patrimonios",
  "Pensiones revalorizadas con el IPC e incluidas en la Constitución",
  "Transición energética con calendario de cierre nuclear y abandono de los combustibles fósiles",
  "Ampliación de derechos feministas, LGTBI y digitales y universalización de la educación infantil"
 ],
 "pdf": "pdf/psoe.pdf",
 "pdfMB": "7,8 MB",
 "ejes": {
  "E1": {
   "p": -1,
   "e": "Sube la tributación de rentas del capital hasta el 35 % por encima de 300.000 €, duplica la tasa Tobin y crea tasas a jets, megayates y tecnológicas, pero mantiene los primeros tramos y exonera a rentas bajas (pp. 49-50)."
  },
  "E2": {
   "p": -1,
   "e": "Congelación temporal de alquileres por encima del índice en zonas tensionadas, parque público estatal de 100.000 viviendas e impuesto a grandes tenedores; también préstamos TUCASA para comprar y ley para agilizar suelo (pp. 28-34)."
  },
  "E3": {
   "p": -1,
   "e": "Jornada de 37,5 horas sin pérdida salarial y 35 por negociación, SMI blindado por encima del 60 % del salario medio, reforma del despido improcedente y salarios de tramitación (pp. 38, 42)."
  },
  "E4": {
   "p": -0.5,
   "e": "«Reforzaremos el sector público empresarial» y mantener la participación del Estado en sectores estratégicos, sin nacionalizaciones (p. 16)."
  },
  "E5": {
   "p": -0.5,
   "e": "Gestión directa como modalidad preferente para limitar la privatización sanitaria y requisitos de calidad exigentes a universidades privadas (pp. 50, 56)."
  },
  "E6": {
   "p": 0,
   "e": "Senda decreciente de déficit y deuda dentro de las reglas fiscales europeas, a la vez que amplía prestaciones e inversión con nuevos ingresos (pp. 48-49)."
  },
  "E7": {
   "p": -1,
   "e": "Congelación temporal de alquileres en zonas tensionadas, Observatorio de Márgenes Empresariales con rango legal y CNMC reforzada para vigilar precios de alimentos y energía (pp. 31, 39)."
  },
  "E8": {
   "p": -1,
   "e": "Blindar en la Constitución la revalorización con el IPC y mejorar la jubilación anticipada involuntaria, sin bajar la edad legal y «preservando el equilibrio del sistema» (p. 41)."
  },
  "S1": {
   "p": -0.5,
   "e": "Migración «ordenada, legal y segura», ampliación de vías legales y asilo y Plan de Integración de 500 M€; no propone regularización amplia (pp. 93-94)."
  },
  "S2": {
   "p": -1.5,
   "e": "Blindar el aborto reformando el artículo 43 de la Constitución y dar máxima protección jurídica a la eutanasia (pp. 82, 90)."
  },
  "S3": {
   "p": -1,
   "e": "Penalizar las «terapias de conversión», garantizar tratamientos hormonales a personas trans y fijar la Ley 4/2023 como suelo común (p. 98)."
  },
  "S4": {
   "p": -0.5,
   "e": "Nueva Ley de Seguridad Ciudadana que sustituya a la de 2015 con garantías para reunión y manifestación, junto a más efectivos policiales y plan contra el narcotráfico (pp. 100-101)."
  },
  "S5": null,
  "S6": {
   "p": -1.5,
   "e": "Nueva estrategia contra las violencias machistas, Ley Orgánica contra la Violencia Vicaria e inclusión de la violencia digital en la ley integral (pp. 83-85)."
  },
  "S7": null,
  "S8": {
   "p": -1,
   "e": "Completar exhumaciones, ampliar Lugares de Memoria, retirar simbología franquista y eliminar entidades que hagan apología de la dictadura (p. 99)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Derecho a la vivienda en la Constitución, parque público estatal y congelación temporal de alquileres en zonas tensionadas.",
   "clave": [
    "Reformar la Constitución para que la vivienda sea un derecho fundamental y destinar el 1 % del PIB al año a vivienda.",
    "Parque público estatal de 100.000 viviendas a través de la entidad Casa 47; que la vivienda protegida permanente sea al menos una cuarta parte de la nueva.",
    "Contratos de alquiler más largos y congelación temporal de las rentas que superen los índices de referencia en zonas tensionadas.",
    "Impuesto progresivo a las viviendas de grandes tenedores que no se destinen a alquiler asequible, impuesto a los solares residenciales sin edificar y opción municipal de gravar las pernoctaciones en pisos turísticos.",
    "Préstamos sin intereses de hasta 50.000 € para comprar la primera vivienda (programa TUCASA) y seguro público de impago para jóvenes inquilinos."
   ],
   "mas": [
    "Destinar el 1 % de la licitación anual de obra pública a un fondo de adquisición de vivienda protegida y asequible.",
    "Más de 25.000 M€ del ICO en avales y préstamos para vivienda asequible, 4.700 M€ del Plan Social del Clima y 400 M€ anuales para el Fondo de Vivienda de Impacto Social.",
    "Ley de proveedores sociales de vivienda y exención en el IRPF de las ganancias obtenidas al vender viviendas a esos proveedores.",
    "Ley de Sostenibilidad y Movilización del Suelo para agilizar el desarrollo urbanístico y banco estatal de suelo público para proveedores sociales y cooperativas en cesión de uso.",
    "Financiar la rehabilitación integral de al menos otras 550.000 viviendas, con atención a los barrios vulnerables y a la accesibilidad de los edificios.",
    "Que el Ministerio de Vivienda identifique y publique un mapa de zonas tensionadas, que hoy deben elaborar las comunidades autónomas y no están haciendo.",
    "Mantener la limitación de compra de vivienda por fondos especulativos y limitar en zonas tensionadas la compra especulativa y los nuevos usos no residenciales.",
    "Crear un registro de precios de los contratos de alquiler y un registro de fondos de inversión y SOCIMI.",
    "Modelo público de intermediación del alquiler inspirado en el del País Vasco, con garantía de cobro para el propietario, y programa de rehabilitación de viviendas vacías cedidas para alquiler asequible.",
    "Marco estable de protección frente a desahucios de personas vulnerables sin alternativa habitacional, cuyo coste asuman las administraciones y no el pequeño propietario."
   ]
  },
  "empleo": {
   "breve": "Jornada de 37,5 horas sin pérdida salarial, salario mínimo ligado al salario medio y reforma del despido improcedente.",
   "clave": [
    "Completar la reducción de la jornada a 37,5 horas y favorecer las 35 horas mediante la negociación colectiva.",
    "Garantizar por ley un salario mínimo por encima del 60 % del salario medio.",
    "Registro horario digital contra las horas extra no pagadas; reformar la indemnización por despido improcedente y recuperar los salarios de tramitación.",
    "Considerar a jornada completa los contratos parciales que superen el 80 % de la jornada; Estatuto del Becario y prestación por desempleo para becarios."
   ],
   "mas": [
    "Ley de Negociación Colectiva y Pacto de Estado por los salarios, con un Observatorio de Salarios y Productividad y rango legal para el Observatorio de Márgenes Empresariales.",
    "Desarrollar el artículo 129.2 de la Constitución para la participación de los trabajadores en la gestión de las empresas y crear un sello de Empresa con Productividad Compartida.",
    "Actualizar la Ley de Prevención de Riesgos Laborales de 1995, con un plan de choque contra los accidentes laborales y protocolos obligatorios frente al calor extremo.",
    "Evaluación obligatoria del estrés crónico, la sobrecarga y el acoso en el trabajo, con medidas correctoras y plazos definidos.",
    "Desarrollar la pasarela al RETA para profesionales de mutualidades alternativas, poner fin progresivamente a esa alternatividad y actualizar el Estatuto del Trabajo Autónomo.",
    "Plan Nuevo Rumbo con incentivos para contratar a mayores de 45 años e itinerario Mujer 45+ para reducir el 20 % de desempleo femenino de larga duración.",
    "Plan de inserción laboral juvenil, plan de emprendimiento juvenil, Plan de retorno del talento joven y Plan Nacional de Relevo Generacional para negocios cuyos titulares se jubilan.",
    "Garantizar el cumplimiento de la cuota de reserva del 2 % de empleo para personas con discapacidad en empresas y sector público, con más inspección.",
    "Ley de Usos del Tiempo de Trabajo con horarios racionales, reducción del tiempo de trabajo sin pérdida salarial y desconexión digital.",
    "Pacto con los agentes sociales sobre la IA en el trabajo: auditar los algoritmos de selección, evaluación, promoción y despido y limitar la vigilancia digital."
   ]
  },
  "impuestos": {
   "breve": "Mayor tributación de las rentas del capital y de las grandes tecnológicas, y ampliación de la tasa financiera.",
   "clave": [
    "Reducción progresiva del déficit y la deuda conforme a las reglas fiscales europeas.",
    "Rentas del capital: mantener los tipos del 19 % y 21 % y subir los siguientes hasta un máximo del 35 % por encima de 300.000 €.",
    "Duplicar la tasa sobre transacciones financieras (del 0,2 % al 0,4 %), más impuestos a las grandes tecnológicas y una tasa a jets privados, megayates y billetes de clase business.",
    "Más Impuesto de Sociedades a las empresas cotizadas donde el primer ejecutivo cobre más de 100 veces la mediana de su plantilla.",
    "Convertir el mínimo por hijo del IRPF en un crédito fiscal que se cobre aunque no se pague IRPF."
   ],
   "mas": [
    "Presentar a la Comisión Europea en la primavera de 2027 un Plan Fiscal y Estructural de Medio Plazo con previsiones avaladas por la AIReF.",
    "Destinar la recaudación de la tributación complementaria de grandes patrimonios y rentas del capital a la prestación por crianza y la lucha contra la pobreza infantil.",
    "Deducción estatal en el IRPF que se active en contextos de subida de precios, con diseño progresivo para rentas medias y bajas.",
    "Seguir exonerando de IRPF a las rentas más bajas para que las subidas del SMI no supongan pagar más impuestos.",
    "Adaptar la Ley de Estabilidad Presupuestaria al nuevo marco europeo y mantener la inversión pública tras los fondos europeos, empezando por 19.000 M€ para el ferrocarril hasta 2030.",
    "Promover el debate internacional sobre un gravamen a los tokens que usan los modelos de inteligencia artificial y apoyar la tributación mínima efectiva de las multinacionales.",
    "Mecanismo Soberano Europeo que centralice parte de la emisión de deuda pública de los Estados miembros, sin aumentar la deuda total.",
    "Reorientar la fiscalidad para la transición ecológica, eliminando barreras y reduciendo costes a las tecnologías limpias.",
    "Reformar la Ley de Mecenazgo con incentivos fiscales para movilizar inversión privada en cultura y en práctica deportiva, infraestructuras y patrocinio."
   ]
  },
  "pensiones": {
   "breve": "Revalorización con el IPC incluida en la Constitución, mejoras en jubilación anticipada y prestación estatal por crianza.",
   "clave": [
    "Incluir en la Constitución el sistema público de pensiones y su revalorización con el IPC.",
    "Mejorar la jubilación en trabajos penosos y la anticipada involuntaria; subir la pensión de orfandad del 20 % al 30 %.",
    "Prestación estatal por crianza para todos los hogares con menores, más alta para rentas bajas, y una «Cuenta de Futuro» de 1.000 € para cada recién nacido.",
    "Bono social único y automático que agrupe luz, gas, transporte, telecomunicaciones y agua; simplificar el Ingreso Mínimo Vital."
   ],
   "mas": [
    "Acelerar la cuota de solidaridad y acordar en el Pacto de Toledo nuevas fuentes de financiación ligadas a los aumentos de productividad por automatización.",
    "Culminar la separación de fuentes: que el Estado financie las prestaciones y complementos de naturaleza no contributiva.",
    "Reforzar el complemento por hijos contra la brecha de género en las pensiones y reconocer un año adicional de cotización por cada hijo o hija.",
    "Cuenta individual de penosidad para aplicar de forma singularizada los coeficientes reductores de la edad de jubilación.",
    "Integrar las mutuas colaboradoras como entidades gestoras de la Seguridad Social, con más control público.",
    "Primera Ley de Servicios Sociales con una cartera común pactada con las comunidades autónomas y aplicación de la Ley 4/2026 de dependencia para reducir listas de espera.",
    "Plan «A Tu Lado»: ayudas para ascensores y eliminar barreras y visita periódica de enfermería o trabajo social a domicilio a partir de los 80 años.",
    "Mejorar la protección social de las cuidadoras principales de larga duración, compensar el impacto en su trayectoria laboral e igualar su remuneración al SMI.",
    "Atención integral a personas con ELA en Grado III+, con exención de copagos acordada con las comunidades autónomas, y registro estatal de pacientes electrodependientes con compensación energética.",
    "Soluciones estables de alojamiento con el modelo Housing First contra el sinhogarismo y despliegue del Marco Estratégico Estatal de las Soledades 2026-2030."
   ]
  },
  "sanidad": {
   "breve": "Financiación pública en torno al 7 % del PIB, gestión directa preferente, atención psicológica gratuita y dentista básico progresivo.",
   "clave": [
    "Financiación pública de la sanidad en torno al 7 % del PIB y gestión directa como forma preferente.",
    "Atención psicológica gratuita, con primera consulta en un máximo de 30 días.",
    "Incorporar progresivamente el dentista básico para adultos (Plan Sonríe) y ampliar el programa de gafas gratuitas.",
    "Garantizar la eutanasia conforme a la ley vigente; baja del 75 % desde el primer día en procesos de cáncer."
   ],
   "mas": [
    "Ayuda directa de hasta 200 € anuales por persona para el dentista mientras se incorporan los tratamientos básicos a la sanidad pública, empezando por rentas medias y bajas.",
    "Ley de Buen Gobierno y Buena Gestión del Sistema Nacional de Salud, basada en la transparencia, la rendición de cuentas y la evaluación de resultados.",
    "Prolongar el Plan de Acción de Atención Primaria más allá de 2027 y financiar con las comunidades autónomas la atención pediátrica en zonas rurales y de difícil acceso.",
    "Nuevo contrato social con los profesionales sanitarios: condiciones laborales, estabilidad, conciliación y captación y fidelización del talento.",
    "Ley de Salud Digital con interoperabilidad, receta electrónica común y movilidad sanitaria entre comunidades autónomas.",
    "Estrategia integral contra el cáncer con más cribados, el Registro Estatal de Cáncer y el derecho al olvido oncológico.",
    "Regular vapeadores y bolsas de nicotina con información sobre componentes, dosis máximas de nicotina y prohibición de sabores.",
    "Ayudas para compensar el sobrecoste de los productos sin gluten para las personas celíacas y actualización de los protocolos diagnósticos.",
    "Estrategia de Salud de las Mujeres (menopausia, endometriosis, dolor crónico) y acceso a la PrEP y la PEP dentro de una estrategia de salud sexual.",
    "Acceso universal a cuidados paliativos integrales y acceso equitativo a medicamentos innovadores, potenciando genéricos y biosimilares y evaluando su efectividad real."
   ]
  },
  "educacion": {
   "breve": "Educación infantil de 0 a 3 años universal, menos alumnos por aula y matrícula gratuita en el primer curso de grado.",
   "clave": [
    "Universalizar la educación de 0 a 3 años, limitar los alumnos por aula y aprobar un Estatuto del Docente.",
    "Bajar el abandono escolar temprano por debajo del 10 % antes de 2030.",
    "Matrícula gratuita en el primer curso de grado en universidades públicas y becas Erasmus de hasta 1.000-1.500 € al mes.",
    "Comedor gratuito para el alumnado en pobreza; exigir a las universidades privadas los mismos requisitos de calidad."
   ],
   "mas": [
    "Un profesional de orientación por cada 250 estudiantes y Plan Estratégico de Educación Inclusiva 2026-2031 con recursos para alumnado con TEA y necesidades educativas especiales.",
    "Ampliar las becas actualizando los umbrales de renta, con refuerzo en transporte y residencia, y doble cómputo en la ratio del alumnado con necesidades educativas especiales.",
    "Ley de Equidad en el Acceso a la Universidad Pública con financiación plurianual vinculante y oferta mínima de plazas en titulaciones de alta demanda.",
    "Complementos de beca para estudiantes de primera generación universitaria y consolidar las Becas Luisa de Medrano para estudiar en otra comunidad autónoma.",
    "Ampliar las 2.000 nuevas plazas públicas de alojamiento universitario aprobadas en 2026, en acuerdo con comunidades, ayuntamientos y universidades.",
    "Más plazas públicas de FP Media y Superior, ampliar la FP Básica y nuevas titulaciones en IA, ciberseguridad, biotecnología y microelectrónica.",
    "Programa María Goyri para estabilizar las plantillas universitarias, convertir la UIMP en universidad pública y ampliar la UNED a titulaciones presenciales.",
    "Adaptar los centros educativos al cambio climático, con patios como refugios climáticos y climatización eficiente.",
    "Promover en la escuela la memoria democrática, los derechos humanos y la lucha contra la desinformación, y estrategia para el uso educativo de la inteligencia artificial.",
    "Ley General de Cultura, Estatuto del Artista y abono de cine de 15 € al mes para menores de 25 años."
   ]
  },
  "inmigracion": {
   "breve": "Plan de Integración y Ciudadanía, más vías legales de protección internacional y una política migratoria europea basada en derechos humanos.",
   "clave": [
    "Plan de Integración y Ciudadanía 2026-2030, con 500 M€ iniciales.",
    "Ampliar las vías legales de protección internacional, con reasentamiento y visados humanitarios.",
    "Unidad de Apoyo a la Infancia Migrante para comunidades en situación de emergencia.",
    "Política migratoria europea basada en las necesidades del mercado de trabajo, la lucha contra el tráfico de personas y los derechos humanos."
   ],
   "mas": [
    "Simplificar los trámites de extranjería, impulsar la contratación en origen y agilizar la homologación de títulos.",
    "Reforzar el sistema público de acogida y asilo con financiación estable y atención en salud mental, educación, traducción e integración social.",
    "Reforzar la protección de los niños, niñas y adolescentes que llegan solos, con el interés superior del menor como criterio.",
    "Itinerario común en todas las comunidades autónomas para acompañar a los jóvenes extutelados en su transición a la vida autónoma.",
    "Promover la participación social, cívica y política de las personas inmigrantes y apoyar su asociacionismo.",
    "Combatir los bulos que culpan a las personas migrantes con información basada en datos y difundir su contribución a la economía."
   ]
  },
  "energia": {
   "breve": "Calendario de cierre nuclear hasta 2035, hoja de ruta para abandonar los combustibles fósiles y Ley de Adaptación al Cambio Climático.",
   "clave": [
    "Mantener el calendario de cierre nuclear hasta 2035.",
    "Hoja de ruta para abandonar los combustibles fósiles, con electrificación, almacenamiento e hidrógeno renovable.",
    "Ley de Adaptación al Cambio Climático y Fondo Nacional de Resiliencia Climática.",
    "Zonas de Bajas Emisiones, más Cercanías y Media Distancia y proteger al menos el 30 % de los ecosistemas."
   ],
   "mas": [
    "Alcanzar el 81 % de generación eléctrica renovable en 2030, priorizando las Zonas de Aceleración Renovable.",
    "Plan nacional de bombeo hidroeléctrico y despliegue acelerado del almacenamiento, la gestión de la demanda y las interconexiones internacionales.",
    "Acelerar una red troncal de gasoductos preparada para hidrógeno verde e interconexiones con Francia para convertir a España en nodo de energía limpia del sur de Europa.",
    "Defender la reforma del mercado eléctrico europeo para que el menor coste de las renovables llegue a hogares y empresas.",
    "Reducir el vertido de residuos por debajo del 30 % en 2030 y crear un Fondo de Reparación financiado por los productores.",
    "Pacto de Estado por la Seguridad Ferroviaria, unos 19.000 M€ para conservación de la red en 2026-2030 y ERTMS de nivel 2 en la línea Madrid-Sevilla.",
    "Reparar los firmes de 5.000 km de carreteras del Estado en cuatro años, con 1.629 M€.",
    "Agencia Estatal de Protección Civil y Emergencias, Centro Estatal de Predicción de Fenómenos Extremos y más medios estatales contra incendios forestales.",
    "Bancos públicos de agua en las confederaciones hidrográficas, más desalación y reutilización, y un mínimo vital de agua para hogares vulnerables recogido en la Constitución.",
    "Protección estricta de hasta el 10 % de las áreas marinas y restauración de Doñana, el Mar Menor, la Albufera, el Delta del Ebro y las Tablas de Daimiel."
   ]
  },
  "economia": {
   "breve": "Ley de Industria y Autonomía Estratégica, más inversión pública en I+D y refuerzo del sector público empresarial.",
   "clave": [
    "Fondo España Crece y nueva Ley de Industria y Autonomía Estratégica.",
    "Aumentar cada año la inversión pública en I+D e impulsar los semiconductores.",
    "Reforzar el sector público empresarial y crear un marco común para que las empresas operen en todas las comunidades («Régimen 20»).",
    "Bancos de tierras para jóvenes agricultores y recompensa a la ganadería extensiva y la agricultura regenerativa."
   ],
   "mas": [
    "Inversión pública en I+D hasta el 1,25 % del PIB fijado por la Ley de la Ciencia y el 1,5 % en 2035, con mejores incentivos fiscales a la I+D empresarial.",
    "Cuenta de Ahorro e Inversión Financia Europa, con incentivos para llevar el ahorro desde el ladrillo a la inversión productiva.",
    "Estrategia Deep Tech España 2026-2030, Estatuto del Personal Investigador y primera Ley de Actividades Espaciales.",
    "Ampliar el Bono IA y crear un servicio público de acceso a herramientas avanzadas de inteligencia artificial con formación personalizada.",
    "Ley de Agricultura Familiar y Profesional con más seguros agrarios, integración cooperativa y medidas contra la concentración de tierras fértiles en fondos de inversión.",
    "Defender en la UE una PAC fuerte para explotaciones profesionales y familiares, más controles a las importaciones y reciprocidad en estándares ambientales, sanitarios y laborales.",
    "Reforzar la CNMC y endurecer las sanciones por abuso de posición dominante para que las rebajas de IVA de los alimentos básicos lleguen al precio final.",
    "Autoridad de Defensa del Cliente Financiero que resuelva gratis en 90 días, con decisiones vinculantes por debajo de 20.000 €, financiada con una tasa a las entidades.",
    "Plan de ayudas a la banda ancha para cerrar las últimas brechas de conectividad y Hoja de Ruta del 6G.",
    "Supervisor independiente de las cargas administrativas que evalúe el impacto regulatorio de las nuevas normas y detecte duplicidades."
   ]
  },
  "igualdad": {
   "breve": "Coeducación obligatoria, prohibición de la gestación subrogada, penalización de las terapias de conversión y permiso parental pagado al 100 %.",
   "clave": [
    "Coeducación y educación afectivo-sexual obligatorias e incluir la violencia digital en la ley de violencia de género.",
    "Reforzar la prohibición de la gestación subrogada y extender el modelo abolicionista a la explotación sexual en internet.",
    "Castigar penalmente las «terapias de conversión» y garantizar tratamientos hormonales a las personas trans.",
    "Cuatro semanas de permiso parental pagadas al 100 % y cuentas de menores invisibles por defecto para adultos desconocidos."
   ],
   "mas": [
    "Reformar el artículo 43 de la Constitución para blindar el derecho al aborto y dar la máxima protección jurídica al matrimonio igualitario y a la eutanasia.",
    "Ley Orgánica contra la Violencia Vicaria y Ley Orgánica Abolicionista del Sistema Prostitucional que prohíba el proxenetismo en todas sus formas.",
    "Tipificar como delito específico la creación y difusión de deepfakes sexuales, adaptando el Código Penal a la inteligencia artificial generativa.",
    "Ampliar hasta los 26 años las ayudas a huérfanos de la violencia de género y valoración forense del riesgo en todos los juzgados de violencia sobre la mujer.",
    "Agravante de género en los delitos económicos contra la pareja o expareja y registro público de deudores por impago de pensiones de alimentos.",
    "Edad mínima de 16 años para usar redes sociales, con verificación obligatoria y anónima de la edad y responsabilidad de los directivos de las plataformas.",
    "Restringir el uso libre de chatbots de inteligencia artificial a menores de 16 años sin consentimiento parental.",
    "Crear en el Código Civil la «unión de amistad» para personas que asuman un compromiso mutuo de cuidados.",
    "Que la Ley 4/2023 sea el suelo común de derechos LGTBI en todas las comunidades y nueva Ley de Familias que reconozca su diversidad.",
    "Revisar las categorías y complementos que infravaloran los trabajos feminizados y Estrategia Estatal contra la feminización de la pobreza."
   ]
  },
  "seguridad": {
   "breve": "Nueva Ley de Seguridad Ciudadana, mandato de cinco años para el Fiscal General y plan nacional contra el narcotráfico.",
   "clave": [
    "Nueva Ley de Seguridad Ciudadana que sustituya a la de 2015.",
    "Mandato de cinco años para el Fiscal General y prohibición de que el Gobierno le dé instrucciones sobre casos concretos.",
    "Primer Plan Nacional Integral contra el Narcotráfico y más efectivos de Policía y Guardia Civil.",
    "Ley Orgánica de Integridad Pública con una agencia anticorrupción independiente y fin de los aforamientos para delitos ajenos al cargo."
   ],
   "mas": [
    "Cámaras corporales en toda la Policía Nacional y la Guardia Civil e identificaciones sin discriminación en la nueva Ley de Seguridad Ciudadana.",
    "Servicio estatal de atención a víctimas de ciberestafas y más responsabilidad de bancos y operadoras en su prevención y reembolso.",
    "Dejar de aplicar el Código Penal Militar a la Guardia Civil en funciones policiales y estudiar el reconocimiento de la penosidad para su jubilación.",
    "Nueva Ley de Enjuiciamiento Criminal que sustituya a la de 1882 y atribuya la investigación a la Fiscalía bajo supervisión judicial.",
    "Juicios por despido y desahucio en un máximo de tres meses, desalojo de viviendas ocupadas en 48 horas y más recursos a los juzgados de guardia.",
    "Regularizar a jueces y fiscales sustitutos, oposiciones con pruebas anonimizadas y prohibir la financiación privada de las asociaciones judiciales y fiscales.",
    "Extender el modelo Barnahus a todo el territorio y crear juzgados especializados en violencia contra la infancia.",
    "Nueva ley de justicia gratuita que incluya a las víctimas de abusos inmobiliarios y mejore las condiciones del turno de oficio.",
    "Ley de grupos de interés con registro obligatorio, publicidad de reuniones y huella normativa, y más transparencia del patrimonio de los cargos públicos.",
    "Responsabilidad penal de los directivos de plataformas que no retiren contenidos ilegales y nuevo delito de manipulación algorítmica."
   ]
  },
  "exterior": {
   "breve": "Autonomía estratégica europea en defensa, solución de dos Estados en Israel y Palestina y apoyo a la soberanía de Ucrania.",
   "clave": [
    "Más autonomía estratégica europea en defensa y modernización de las Fuerzas Armadas. En su balance, rechaza el objetivo del 5 % del PIB en gasto militar.",
    "Solución de dos Estados en Israel y Palestina y sanciones de la UE a quienes la obstaculicen; apoyo a la soberanía de Ucrania.",
    "Participar como observador en el Tratado sobre la Prohibición de las Armas Nucleares.",
    "Ayuda al desarrollo del 0,7 % de la renta nacional e impuesto mínimo global a las grandes fortunas."
   ],
   "mas": [
    "Reformar Naciones Unidas y su Consejo de Seguridad limitando el derecho de veto y fortalecer la Corte Penal Internacional.",
    "Avanzar hacia una unión política y fiscal europea, superar la unanimidad y reforzar el Parlamento Europeo.",
    "Ampliar la UE a los Balcanes Occidentales y un presupuesto europeo con nuevos recursos propios que preserve la cohesión, la PAC y la pesca.",
    "Integrar Ceuta y Melilla en la Unión Aduanera con un régimen fiscal favorable y reconocerlas como regiones ultraperiféricas.",
    "Desplegar el Acuerdo sobre Gibraltar y la eliminación de la Verja, preservando la posición española sobre la soberanía.",
    "Seguir impulsando la oficialidad del catalán, el euskera y el gallego en la UE y ampliar la red del Instituto Cervantes.",
    "Simplificar el voto exterior, estudiar en una comisión parlamentaria una Circunscripción Exterior y nuevo Plan Integral de Retorno.",
    "Política exterior feminista e impulso a la elección de la primera mujer secretaria general de Naciones Unidas.",
    "Modernizar las Fuerzas Armadas, incluidos el ámbito espacial y la ciberdefensa, y reforzar las agencias de inteligencia y la UME.",
    "Comercio internacional basado en reglas con una OMC renovada y relación estratégica con América Latina y África."
   ]
  },
  "estado": {
   "breve": "Voto a los 16 años, supresión de aforamientos, asunción de deuda autonómica y uso de lenguas cooficiales en las Cortes.",
   "clave": [
    "Uso de las lenguas cooficiales en las Cortes y en la Administración del Estado donde son oficiales.",
    "Asumir 83.000 M€ de deuda autonómica e institucionalizar la Conferencia de Presidentes.",
    "Voto a los 16 años y supresión de los aforamientos para delitos ajenos al cargo.",
    "Completar la resignificación de Cuelgamuros, retirar simbología franquista y eliminar entidades que hagan apología de la dictadura."
   ],
   "mas": [
    "Nuevo sistema de financiación autonómica aprobado en el Consejo de Política Fiscal y Financiera, con 21.000 M€ adicionales.",
    "Reformar el Senado para convertirlo en cámara de representación territorial, haciendo coincidir sus circunscripciones con el ámbito de cada comunidad autónoma.",
    "Ley de cooperación interadministrativa y actualización de la Ley Reguladora de las Bases del Régimen Local para clarificar competencias.",
    "Desarrollar plenamente el Régimen Económico y Fiscal de Canarias y aprobar un plan integral para Ceuta y Melilla.",
    "Reforma constitucional para proteger la salud y la vivienda como derechos fundamentales y reconocer la seguridad climática y el acceso al agua potable.",
    "Escaño ciudadano sin voto en el Congreso y el Senado y menos firmas para la iniciativa legislativa popular.",
    "Completar el Plan de Exhumaciones y el Censo de las Víctimas de la Guerra y la Dictadura.",
    "Atención presencial o telefónica sin cita previa obligatoria en la Administración del Estado y fin de pedir documentos que la Administración ya tiene.",
    "Nueva Ley de Función Pública para reducir la temporalidad y consolidar una dirección pública profesional basada en el mérito.",
    "Crear el Defensor de las Generaciones Futuras y regular por ley el Consejo de la Juventud de España."
   ]
  }
 }
},
{
 "id": "pp",
 "name": "PP",
 "nombre": "Partido Popular",
 "ambito": "Estatal",
 "doc": "La reconstrucción nacional. El programa del cambio necesario para España",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026. Algunas medidas aparecen sin contenido, con la indicación de que se darán a conocer durante la campaña.",
 "ext": "64 páginas, unas 250 medidas numeradas",
 "idioma": "Castellano",
 "estructura": [
  "Reparar el Estado",
  "Regenerar la democracia",
  "Reunir a la Nación",
  "Recuperar la ambición y la autoestima"
 ],
 "resumen": "Programa de unas 250 medidas numeradas en cuatro bloques (reparar el Estado, regenerar la democracia, reunir a la Nación y recuperar la ambición), varias de ellas pendientes de anunciar en campaña. Pone el foco en la reforma de la Administración y de las instituciones, el control migratorio, la seguridad, un millón de viviendas y rebajas fiscales, y propone derogar las leyes de Vivienda, Amnistía y Memoria Democrática.",
 "esencial": [
  "Construir un millón de viviendas y derogar la Ley de Vivienda",
  "Bajada del IRPF para rentas medias y bajas y exención para jóvenes",
  "Reforma de la Administración, con auditoría del gasto y test de productividad",
  "Control de la inmigración irregular, expulsiones y requisitos más exigentes para la nacionalidad",
  "Refuerzo de la seguridad, con penas más duras y más medios policiales",
  "Derogación de las leyes de Amnistía y de Memoria Democrática"
 ],
 "pdf": "pdf/pp.pdf",
 "pdfMB": "5,4 MB",
 "ejes": {
  "E1": {
   "p": 1,
   "e": "Rebajas de IRPF a rentas medias y bajas y jóvenes, IVA del 0 % en alimentos básicos, supresión del impuesto del 7 % a la producción eléctrica y libertad de amortización (p. 47, 54); no propone rebajar sociedades, sucesiones ni patrimonio."
  },
  "E2": {
   "p": 1.5,
   "e": "Derogar la Ley de Vivienda y eliminar zonas tensionadas e índice de precios; nueva Ley del Suelo, silencio positivo en licencias, IVA del 4 % y aval público para la compra (p. 41-43)."
  },
  "E3": {
   "p": 1,
   "e": "Bonificación del 100 % de cotizaciones por el primer trabajador, menor cotización por desempleo a plantillas estables y más papel de las mutuas en las bajas (p. 46); no plantea cambios en el despido."
  },
  "E4": {
   "p": 1,
   "e": "Revisar las participaciones empresariales del Estado y vender las que no respondan a un interés público o estratégico acreditado (p. 13)."
  },
  "E5": {
   "p": 1,
   "e": "Libre elección de centro y conciertos de al menos seis años sin eliminar los que tengan demanda (p. 51); plan de infraestructuras con el sector privado (p. 36); en sanidad propone un pacto por la sanidad pública (p. 52)."
  },
  "E6": {
   "p": 1,
   "e": "Auditoría del gasto, menos ministerios y altos cargos, reducción de la deuda y del déficit estructural y ningún gasto nuevo sin financiación (p. 12-13, 34); a la vez prevé más gasto en defensa e infraestructuras."
  },
  "E7": {
   "p": 1,
   "e": "Suprimir tres normas por cada nueva, reducir cargas un 25 %, test de productividad y eliminar el índice de precios del alquiler (p. 13-14, 42, 48); mantiene una tarifa social eléctrica (p. 54)."
  },
  "E8": {
   "p": 0,
   "e": "Revalorizar las pensiones con el IPC cada año e incentivar la jubilación activa con deducciones en el IRPF (p. 34); trato fiscal equivalente a todas las formas de ahorro (p. 47); no cambia la edad de jubilación."
  },
  "S1": {
   "p": 1.5,
   "e": "Prohibir por ley las regularizaciones masivas, arraigo excepcional, expulsión como regla para condenados, cupos y prioridad en ayudas por «arraigo real, duradero y verificable» (p. 18-20, 32)."
  },
  "S2": {
   "p": 0.5,
   "e": "No propone cambiar las leyes de aborto ni de eutanasia; computa al concebido no nacido para las ayudas familiares (p. 44) y plantea los cuidados paliativos como alternativa a «la aceleración de la muerte» (p. 54)."
  },
  "S3": {
   "p": 1,
   "e": "Revisar la Ley Trans, eliminar la autodeterminación registral del sexo y usar el sexo biológico en el deporte femenino, a la vez que se compromete a combatir la LGTBIfobia (p. 35)."
  },
  "S4": {
   "p": 1.5,
   "e": "Endurecer las penas por desórdenes públicos, agravante por ocultar el rostro, ampliar la prisión permanente revisable y más protección jurídica a los agentes (p. 16-17)."
  },
  "S5": {
   "p": 1,
   "e": "Reforma legal para proteger los símbolos del Estado (p. 37) y castigo de la difusión de consignas que inciten a la violencia (p. 16); también promete acabar con la «cultura de la cancelación» (p. 38)."
  },
  "S6": {
   "p": -0.5,
   "e": "Mantiene el Pacto de Estado contra la Violencia de Género, pasa las pulseras a Interior y refuerza VioGen y los juzgados especializados (p. 17); no propone nuevas leyes."
  },
  "S7": {
   "p": 1,
   "e": "Protección de fiestas y tradiciones populares y restitución del Premio Nacional de Tauromaquia (p. 38); prohibición del burka y el niqab en espacios públicos (p. 19)."
  },
  "S8": {
   "p": 1.5,
   "e": "Derogar la Ley de Memoria Democrática y sustituirla por una «Ley de Concordia» que mantenga la búsqueda de desaparecidos (p. 37)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Un millón de viviendas, derogación de la Ley de Vivienda, IVA reducido para la primera vivienda y ayudas a jóvenes.",
   "clave": [
    "Construir un millón de viviendas movilizando suelo público y privado, y derogar la Ley de Vivienda.",
    "Para menores de 40 años: IVA de la primera vivienda del 10 % al 4 %, aval público de hasta el 20 % del precio y «Hucha Hogar Joven» (hasta 2.000 €/año con deducción del 20 %).",
    "Deducción en el IRPF para inquilinos según ingresos e incentivo fiscal al propietario que renueve 3 años más subiendo la renta por debajo del IPC.",
    "Ley para que el propietario recupere una vivienda ocupada en 48 horas por orden judicial.",
    "Impulsar la vivienda industrializada y la regeneración urbana, y vincular la financiación local a objetivos de suelo y vivienda asequible."
   ],
   "mas": [
    "Aprobar una nueva Ley del Suelo, resolver en tres meses con silencio positivo las licencias de obra y publicar todas las parcelas públicas destinadas a vivienda.",
    "Eliminar las zonas tensionadas y el índice de precios del alquiler, a los que el programa atribuye más incertidumbre y menos oferta.",
    "Permitir vivienda social en suelo dotacional, el cambio de uso de oficinas y locales a vivienda asequible y la segregación de viviendas grandes.",
    "Crear la figura de «proyectos residenciales estratégicos», con trámites unificados, declaración implícita de utilidad pública y plazos máximos de resolución.",
    "IVA superreducido del 4 % para rehabilitar vivienda habitual, con ayudas, avales preferentes, la figura del agente rehabilitador y más edificabilidad cuando haga falta.",
    "Financiar con el ICO, el Banco Europeo de Inversiones y fondos europeos el desarrollo de suelo, la urbanización y la construcción de vivienda asequible.",
    "ITP reducido para la primera vivienda usada de los jóvenes, pago fraccionado de IVA e ITP al ritmo de la hipoteca y cuatro años para reinvertir sin tributar en el IRPF.",
    "Ampliar hasta los 50 años la edad del aval público y fijar en 40.000 € el límite de la «Hucha Hogar Joven», con rendimientos exentos.",
    "Permitir a las comunidades de propietarios pedir el desalojo judicial, anular el empadronamiento del ocupante y eximir al propietario de suministros e impuestos durante la «ocupación».",
    "Plan de formación en oficios de la construcción y cupos de inmigración laboral que tengan en cuenta la falta de mano de obra del sector."
   ]
  },
  "empleo": {
   "breve": "Autónomos sin cuota el primer año, cotización reducida por desempleo para plantillas estables y formación en inteligencia artificial.",
   "clave": [
    "Autónomos: sin cuota el primer año, ni el segundo si ingresan menos del salario mínimo; sin obligación de cobrar ni declarar IVA si facturan menos de 85.000 €.",
    "Menor cotización por desempleo para las empresas con plantillas más estables que la media de su sector.",
    "Un cheque para que cada trabajador se forme en inteligencia artificial.",
    "Hasta el 100 % de la base en bajas por enfermedades graves y más papel de las mutuas frente al absentismo injustificado.",
    "Bancos de horas para que quienes tienen hijos o dependientes adapten su jornada."
   ],
   "mas": [
    "Bonificar al 100 % durante un año las cotizaciones empresariales por el primer trabajador que contrate un autónomo y al 50 % las del segundo.",
    "Autónomos: declaraciones semestrales en lugar de trimestrales, una sola anual al iniciar la actividad y reglas claras para deducir gastos de vivienda y vehículo.",
    "Bonificar la cuota del autónomo con enfermedad grave desde el primer día de baja y ampliar la prestación por cese de actividad y la Ley de Segunda Oportunidad.",
    "Proteger por defecto la vivienda habitual del autónomo, para que arriesgar en un negocio no signifique arriesgar la casa.",
    "Publicar cada mes, junto al paro registrado, cuántos trabajadores fijos discontinuos no están trabajando, para conocer el dato real del desempleo.",
    "Incentivos a las empresas por trabajadores con hijos pequeños, más ayudas para contratar sustitutos durante los permisos y cuota bonificada dos años a autónomos que vuelvan del permiso.",
    "Extender los horarios flexibles de entrada y salida y el teletrabajo cuando la naturaleza del puesto lo permita, para quienes tienen hijos o dependientes.",
    "Premiar a las empresas que mejor gestionen la incapacidad temporal y perseguir el fraude de quienes cobran prestaciones indebidas.",
    "Hacer compatibles las pensiones de discapacidad con el empleo y ampliar los apoyos para adaptar puestos de trabajo y para el empleo con apoyo.",
    "Mantener las oposiciones como única vía de acceso al empleo público, ante la jubilación de casi la mitad de la plantilla estatal en diez años."
   ]
  },
  "impuestos": {
   "breve": "Bajada del IRPF para rentas medias y bajas, IVA cero en alimentos básicos y auditoría del gasto público.",
   "clave": [
    "Bajar el IRPF a rentas medias y bajas, actualizarlo con la inflación y que quien cobre el salario mínimo no pague IRPF.",
    "Jóvenes de 18 a 35 años: sin IRPF el primer año que tributen y con una rebaja en los tres siguientes.",
    "IVA del 0 % a los alimentos básicos (incluidos carne, pescado y conservas) mientras dure la crisis de inflación.",
    "Que las empresas puedan deducir en el mismo año toda la inversión en maquinaria, digitalización o I+D; eliminar el impuesto del 7 % a la producción eléctrica.",
    "Auditoría de todo el gasto en 100 días, menos ministerios y altos cargos, y reducción de la deuda según las reglas europeas."
   ],
   "mas": [
    "Estatuto del Contribuyente con derecho al error, sin aplicar con efecto retroactivo cambios de criterio desfavorables y con un Consejo para la Defensa del Contribuyente reforzado.",
    "Dar un trato fiscal equivalente a las distintas formas de ahorro mientras el dinero siga invertido, para que cada contribuyente elija cómo ahorrar.",
    "Garantizar que las comunidades autónomas decidan libremente sobre sus impuestos propios y cedidos y puedan bajarlos cuanto quieran.",
    "Tributación al 20 % durante seis años para los profesionales que vengan a España a trabajar en grandes proyectos tecnológicos.",
    "Anticipar parte del incentivo fiscal a la inversión a las startups y empresas innovadoras que todavía no tengan beneficios.",
    "Intensificar la lucha contra el fraude fiscal y destinar los ingresos recuperados a bajar los impuestos a quienes cumplen.",
    "No aprobar ningún gasto nuevo sin garantizar su financiación futura y ampliar las competencias de la AIReF para evaluar el gasto y la deuda.",
    "Evaluar cada año con criterios independientes parte de los programas de gasto hasta cubrir todo el presupuesto en la legislatura, retirando recursos a los que no cumplan.",
    "Prorrogar las subvenciones solo tras una evaluación positiva, repartirlas con baremos públicos y priorizar exenciones y créditos fiscales sobre ayudas directas.",
    "Acortar los plazos legales de devolución de impuestos y agilizar el pago de las ayudas reconocidas, para que el Estado pague tan rápido como cobra."
   ]
  },
  "pensiones": {
   "breve": "Revalorización anual con el IPC, reconstrucción del Pacto de Toledo, ayudas fiscales por hijo y Pacto de Estado por la Dependencia.",
   "clave": [
    "Revalorizar las pensiones cada año con el IPC, reconstruir el Pacto de Toledo e incentivar la jubilación activa con deducciones.",
    "Pacto de Estado por la Dependencia, con el Estado pagando el 50 % del coste público; deducción por cuidar a familiares.",
    "Ayudas fiscales por hijo cobradas cada mes por todas las familias.",
    "Prioridad en determinadas ayudas para quienes tengan un «arraigo real, duradero y verificable» con España; el padrón no bastará para ayudas no urgentes."
   ],
   "mas": [
    "Deducción del 40 % de lo pagado por la atención profesional a un mayor dependiente y cotización del Estado por quien deje de trabajar o reduzca jornada para cuidarlo.",
    "Modernizar el IMSERSO, garantizar la atención presencial y facilitar que los mayores elijan cómo y dónde vivir y recibir cuidados.",
    "Ampliar el acceso a la jubilación anticipada de las personas con síndrome de Down y apoyar específicamente a las personas con autismo y sus familias.",
    "Atención temprana, asistencia personal, vivienda con apoyos y accesibilidad universal para las personas con discapacidad a lo largo de toda la vida.",
    "Reconocer de oficio las ayudas y prestaciones cuando la Administración ya tenga los datos, sin que el ciudadano tenga que solicitarlas.",
    "Garantizar que cambiar de comunidad autónoma no suponga perder prestaciones, reforzando la Alta Inspección del Estado.",
    "Reforzar las ayudas a las familias vulnerables para reducir la pobreza infantil y evitar que la falta de recursos separe a los niños de sus familias.",
    "Mantener la prestación CUME para el cuidado de hijos con cáncer u otra enfermedad grave y su continuidad más allá de los 26 años en los supuestos previstos.",
    "Mejorar la detección y el acompañamiento de la soledad no deseada en colaboración con comunidades autónomas, ayuntamientos y sociedad civil."
   ]
  },
  "sanidad": {
   "breve": "Pacto de Estado por la Sanidad Pública, plan de salud mental 2027-2037, historial clínico único y reducción de listas de espera.",
   "clave": [
    "Pacto de Estado por la Sanidad Pública con las comunidades para reducir listas de espera y aumentar plantillas.",
    "Plan Nacional de Salud Mental 2027-2037 con financiación garantizada.",
    "Tarjeta sanitaria e historial clínico únicos en toda España.",
    "Deducción en el IRPF de los gastos por cáncer, ELA y otras enfermedades graves; acceso garantizado a cuidados paliativos."
   ],
   "mas": [
    "Al menos 4.500 médicos más en Atención Primaria y más plazas de formación sanitaria especializada, en coordinación con las comunidades autónomas.",
    "Ámbito de negociación propio para los médicos, mejores retribuciones y conciliación para los profesionales sanitarios y reducción de la duración de las guardias.",
    "Ley nacional de cuidados paliativos, incluidos los pediátricos y domiciliarios, para que nadie se vea empujado a «la aceleración de la muerte» por falta de alternativas.",
    "Agilizar la evaluación, financiación y fijación de precio de los nuevos medicamentos y crear un Fondo Estatal de Innovación en Enfermedades Raras y Terapias Avanzadas.",
    "Defender el modelo farmacéutico y la red de farmacias comunitarias, crear reservas estratégicas de medicamentos y atraer a España la fabricación de los esenciales.",
    "Estrategia de servicios preventivos comunes en toda España (vacunación, cribados, diagnóstico precoz) y refuerzo de la Agencia Estatal de Salud Pública.",
    "Más protección laboral y adaptación de puestos para pacientes con enfermedades graves, sobre todo oncológicos, y deducción por ley en el IRPF para personas celíacas.",
    "Plan Estratégico de Sanidad para Ceuta y Melilla con financiación plurianual, UCI pediátrica, nuevas unidades de radioterapia e incentivos para cubrir plantillas.",
    "Estrategia integral frente a las adicciones, con atención especial a los jóvenes, y participación de las organizaciones de pacientes en las políticas sanitarias.",
    "Facilitar la congelación de óvulos a mujeres jóvenes y revisar con criterios médicos los límites de edad de la reproducción asistida en el Sistema Nacional de Salud."
   ]
  },
  "educacion": {
   "breve": "Sustitución de la LOMLOE, exigencia de aprobar para pasar de curso en la ESO y libre elección de centro.",
   "clave": [
    "Sustituir la LOMLOE y volver a exigir aprobar las asignaturas para pasar de curso en la ESO.",
    "Libre elección de centro en todo el municipio, sin cerrar conciertos con demanda ni centros de educación especial.",
    "Garantizar el derecho a estudiar en castellano en toda España.",
    "Beca como derecho por ley para quien la necesite y apruebe; escuela de 0 a 3 años gratuita, financiada a medias con las comunidades.",
    "Nota mínima para acceder a Magisterio."
   ],
   "mas": [
    "Detectar a tiempo las dificultades de lectura y cálculo y dar refuerzo específico en ese mismo curso, dentro del horario escolar.",
    "Conciertos educativos de al menos seis años en todas las etapas, con módulos que cubran el coste real para que la plaza concertada sea gratuita.",
    "Refuerzo obligatorio en la ESO para el alumno que vaya mal antes de que tenga que repetir curso, y planes de mejora con recursos para los centros con más dificultades.",
    "Carrera profesional docente, incentivos para atraer profesores de matemáticas, física y tecnología y defensa jurídica de la Administración al docente agredido.",
    "Protocolo nacional contra el acoso escolar, también en la red, con sanciones educativas para el acosador y sin que la víctima tenga que cambiar de centro.",
    "Prueba de acceso a la universidad (PAU) común en todo el territorio, con condiciones acordadas con las comunidades autónomas y las universidades.",
    "Mapa Nacional de la FP, FP dual con las mismas reglas en toda España, incentivos fiscales a empresas formadoras y sin matrícula en ciclos de alta demanda.",
    "Becas de excelencia para los mejores expedientes y mismos umbrales de beca en la universidad que en la FP.",
    "Currículos de Historia elaborados con las Reales Academias y sociedades científicas; estudiar la Constitución, la Transición y el daño causado por el terrorismo.",
    "Autonomía universitaria a cambio de rendir cuentas sobre empleabilidad, investigación y proyección internacional, sustituyendo la burocracia de acreditación por criterios sencillos."
   ]
  },
  "inmigracion": {
   "breve": "Autoridad única migratoria, prohibición de regularizaciones masivas, visados por puntos y expulsión de condenados por delitos graves.",
   "clave": [
    "Autoridad única de política migratoria; más agentes y apoyo de las Fuerzas Armadas en la frontera sur; identificación en siete días y devolución sin demora.",
    "Prohibir por ley las regularizaciones masivas y hacer excepcional el arraigo.",
    "Visados por puntos y cupos anuales de trabajadores por sectores; compromiso de integración obligatorio (español, Constitución) para renovar la residencia.",
    "Expulsión como regla para extranjeros condenados por delitos sexuales, de sangre o multirreincidencia; más tiempo en los CIE y centros de retorno en terceros países.",
    "Requisitos más exigentes para la nacionalidad y prohibición del burka y el niqab en espacios públicos."
   ],
   "mas": [
    "Reformar la Ley de Extranjería para que el rechazo en frontera cubra las entradas a nado en Ceuta y Melilla, y modernizar vallas con sensores, cámaras térmicas y drones.",
    "Publicar cada año un informe sobre el efecto de la inmigración en el empleo, los salarios, la vivienda, los servicios públicos y la Seguridad Social.",
    "Asilo: resolver las solicitudes pendientes, firmar acuerdos con países seguros e impedir que encadenar peticiones rechazadas sirva para bloquear una expulsión.",
    "Equipos policiales conjuntos permanentes en países de origen y tránsito contra las redes, y sanciones más duras por la venta de contratos simulados.",
    "Menores: determinar la edad en 72 horas, crear el delito de fraude de identidad o edad y priorizar la reunificación familiar y el retorno a su país.",
    "Revisar la atribución automática de la tutela de menores migrantes a las comunidades y sustituir el reparto por un modelo de protección individualizada con retorno.",
    "Prohibición de entrada permanente para quien suponga un riesgo para la seguridad y retirada de la residencia por vínculos con el crimen organizado o la radicalización violenta.",
    "Programas de retorno voluntario con incentivos en colaboración con la Organización Internacional para las Migraciones.",
    "Regular la pérdida de la nacionalidad de quienes no sean españoles de origen y tengan condena firme por delitos graves, evitando la apatridia.",
    "Ceuta: devolver a quienes entraron ilegalmente sin derecho a quedarse, reclamar a Marruecos cooperación en las readmisiones y aprobar un Plan de Reactivación."
   ]
  },
  "energia": {
   "breve": "Eliminación del calendario de cierre de las centrales nucleares, supresión del impuesto a la producción eléctrica y Pacto Nacional del Agua.",
   "clave": [
    "Eliminar el calendario de cierre de las centrales nucleares (Almaraz, Ascó, Vandellós, Cofrentes y Trillo) con el visto bueno del Consejo de Seguridad Nuclear.",
    "Eliminar el impuesto del 7 % a la producción eléctrica y crear una tarifa social única.",
    "Revisar el ritmo de descarbonización de cada sector según tecnología disponible y lo que hagan otros países.",
    "Pacto Nacional del Agua (hasta 40.000 M€ hasta 2030) y plan de infraestructuras de más de 300.000 M€ en 15 años con el sector privado."
   ],
   "mas": [
    "Estrategia nacional de energía nuclear, participación en iniciativas europeas de pequeños reactores modulares y competencia en igualdad de todas las tecnologías en subastas y ayudas.",
    "Reformular el Plan Nacional Integrado de Energía y Clima y facilitar contratos de electricidad a largo plazo con precios estables para industria y hogares.",
    "Plan de choque de 18 meses para desbloquear las conexiones a la red eléctrica y anticipar capacidad en zonas industriales, viviendas y centros de datos.",
    "Actualizar en seis meses las reglas del sistema eléctrico para evitar otro apagón y no cerrar centrales de gas o hidroeléctricas de respaldo sin alternativa acreditada.",
    "Estatuto del Consumidor Energético, contratos tipo para luz, agua y gas y compensación automática a quien se quede sin luz por un fallo del sistema.",
    "Analizar las más de 1.000 limitaciones temporales de velocidad ferroviaria y aprobar un plan de atención urgente a los pasajeros de trenes detenidos.",
    "Renovar vías y trenes de alta velocidad empezando por el corredor de Andalucía, hacer efectivas las indemnizaciones por retraso y mejorar Cercanías y Rodalies.",
    "Acelerar los corredores Mediterráneo, Atlántico y Ruta de la Plata y desplegar un programa de conservación de los más de 26.500 km de carreteras estatales.",
    "Priorizar la limpieza de cauces y barrancos y las presas técnicamente justificadas, con atención al Mediterráneo, y reformar la Ley de Montes para prevenir incendios todo el año.",
    "No imponer obligaciones adicionales ni acelerar plazos en economía circular, y retirar las obligaciones climáticas que perjudiquen la competitividad, la industria o el empleo."
   ]
  },
  "economia": {
   "breve": "Test de productividad para toda norma, reducción de cargas administrativas y proyectos industriales de interés nacional.",
   "clave": [
    "Test de productividad para toda nueva norma y reducir las cargas administrativas un 25 % (35 % para pymes) antes de 2029.",
    "Proyectos industriales de más de 100 empleos declarados de interés nacional; más deducción por I+D.",
    "Pacto Nacional para el Campo, el Mar y el Monte; mantener la PAC sin recortes y crear un seguro de ingresos agrarios.",
    "Exigir a los alimentos importados los mismos requisitos que a los españoles y vender participaciones públicas sin interés estratégico."
   ],
   "mas": [
    "Suprimir tres normas por cada nueva regulación y sumarse a la petición de una pausa de un año en la producción normativa de la Unión Europea.",
    "Ampliar las actividades que se inician con declaración responsable y los supuestos de silencio administrativo positivo, en colaboración con comunidades y ayuntamientos.",
    "Aplicar nuevos requisitos a las pymes solo tras cuatro años de crecimiento consolidado y simplificar las obligaciones de las empresas de hasta 250 trabajadores.",
    "Zonas de Innovación Estratégica con trato fiscal favorable durante siete años para proyectos de IA, semiconductores, biotecnología, baterías y sector aeroespacial.",
    "Que una licencia obtenida en una comunidad sirva en las que compartan requisitos, con la CNMC legitimada para recurrir trabas autonómicas injustificadas.",
    "Anticipar a los jóvenes agricultores hasta el 70 % de la ayuda de la PAC a la incorporación y facilitar la contratación de mano de obra en origen.",
    "Repartir fiscalmente entre varios años los ingresos de una buena campaña agrícola, forestal o pesquera y permitir una reserva para los años malos.",
    "Reformar la Ley de la Cadena Alimentaria para mejorar la información sobre costes y márgenes y proteger a los ganaderos frente al lobo.",
    "Ingresos extra para agricultores, ganaderos, pescadores y titulares forestales por beneficios ambientales (carbono, agua, biodiversidad) compatibles con el mercado europeo de emisiones.",
    "Defender la caza, aprobar una nueva Ley de Costas con seguridad jurídica para negocios y núcleos históricos y apoyar la renovación de la flota pesquera."
   ]
  },
  "igualdad": {
   "breve": "Revisión de la Ley Trans, sexo biológico en el deporte femenino y ampliación de permisos por nacimiento.",
   "clave": [
    "Ampliar los permisos por nacimiento mediante el diálogo social y escuela de 0 a 3 años gratuita.",
    "Revisar la Ley Trans, eliminar la autodeterminación registral del sexo y usar el sexo biológico en las categorías deportivas femeninas.",
    "Pulseras de control de alejamiento gestionadas por Interior y ley integral contra la trata.",
    "Ningún menor de 14 años con cuenta en redes sociales, y hasta los 16 con permiso de los padres.",
    "Compromiso de seguir combatiendo la LGTBIfobia."
   ],
   "mas": [
    "Computar al concebido no nacido para determinar las ayudas familiares y ofrecer orientación y apoyo a cualquier mujer que quiera ser madre.",
    "Integrar los servicios autonómicos y municipales en VioGen, proteger a los hijos de las víctimas y rendir cuentas cada año del Pacto de Estado contra la Violencia de Género.",
    "Criterios comunes en toda España contra la mutilación genital femenina y los matrimonios forzados, con protocolos en puertos, aeropuertos y fronteras.",
    "Reconocimiento común de las familias monoparentales válido en toda España y medidas de conciliación para quienes no pueden turnarse con otro progenitor.",
    "Permitir la declaración conjunta del IRPF a las parejas de hecho y actualizar con la inflación todos los mínimos familiares.",
    "Verificación de edad obligatoria, descanso digital nocturno y límites al «scroll infinito» en redes, con sanciones a las plataformas proporcionales a su facturación.",
    "Más libertad para organizar el permiso por nacimiento tras las semanas obligatorias, con reglas de preaviso para las empresas.",
    "Programa nacional de mujer rural y del mar que reúna apoyos de vivienda, financiación, fiscalidad, titularidad, formación y liderazgo.",
    "Más medios y especialización para las secciones de violencia sobre la mujer de los tribunales y las unidades especializadas de Policía y Guardia Civil."
   ]
  },
  "seguridad": {
   "breve": "Penas más duras por desórdenes públicos, ampliación de la prisión permanente revisable y elección judicial de vocales del CGPJ.",
   "clave": [
    "Penas más duras por desórdenes públicos violentos, agravante por ocultar el rostro y multa mínima de 3.000 € por vandalismo.",
    "Ampliar la prisión permanente revisable a quien oculte el cadáver de su víctima y a depredadores sexuales reincidentes.",
    "Que los jueces elijan a los 12 vocales judiciales del CGPJ y que el Fiscal General no dependa del Gobierno.",
    "Recuperar los delitos de sedición y de convocatoria de referéndum ilegal; derogar la Ley de Amnistía.",
    "Reconocer a Policía Nacional y Guardia Civil como profesión de riesgo y más medios contra el narcotráfico."
   ],
   "mas": [
    "Unidad central permanente contra el crimen organizado en la frontera sur, escáneres de contenedores en Algeciras, Valencia, Barcelona y Vigo y litoral andaluz como zona de especial singularidad.",
    "Plan de empleo, formación y vivienda de al menos diez años para frenar el reclutamiento de jóvenes por las mafias del narcotráfico.",
    "Juicios rápidos, tramitación conjunta de delitos leves y mejor acceso policial a antecedentes contra la multirreincidencia en hurtos y «ocupación».",
    "Delito propio de captación de menores para delinquir y reforma de la Ley del Menor para alargar el internamiento en delitos graves con violencia o en banda.",
    "Valorar la actuación policial según la información que el agente tenía al intervenir y darle defensa jurídica pública desde el primer momento.",
    "Ampliar las competencias de la Audiencia Nacional contra narcotráfico, blanqueo y crimen organizado y crear órganos especializados en ciberdelincuencia.",
    "Nuevo Estatuto del Ministerio Fiscal con mandato único de cinco años para el fiscal general, informe vinculante del CGPJ y cese automático si es procesado.",
    "Impedir que jueces y fiscales que hayan ocupado cargos políticos vuelvan a juzgar o a ejercer la acusación hasta cinco años después de su cese.",
    "Restablecer las penas por malversación y aprobar una Ley del Indulto que lo excluya para corrupción, terrorismo y delitos contra el orden constitucional.",
    "Sin tercer grado ni libertad condicional para condenados por terrorismo sin arrepentimiento ni colaboración con la Justicia, y prohibición efectiva de homenajes a miembros de ETA."
   ]
  },
  "exterior": {
   "breve": "Inversión plurianual en defensa, apoyo a Ucrania y solución «mutuamente aceptable» para el Sáhara.",
   "clave": [
    "Inversión plurianual en defensa, más efectivos y refuerzo de los contingentes de la OTAN y del pilar europeo.",
    "Apoyo a Ucrania frente a Rusia.",
    "Proteger a la población civil de Gaza y buscar soluciones diplomáticas con Israel y los países árabes; señala a Irán como principal factor de inestabilidad.",
    "Sáhara: apoyar a la ONU para una solución «mutuamente aceptable»; condena de los gobiernos de Cuba, Nicaragua y Venezuela.",
    "Condicionar visados y cooperación al desarrollo a la colaboración en retornos."
   ],
   "mas": [
    "Ley de programación y financiación de la defensa con objetivos de personal y material a medio y largo plazo y compromisos respaldados por las Cortes.",
    "Más efectivos y mejores retribuciones para las Fuerzas Armadas, reconocidas como profesión de riesgo, con una carrera militar basada en el mérito.",
    "Impulsar la industria de defensa española con prioridad para drones y antidrones, defensa antiaérea, munición, ciberdefensa y capacidades navales.",
    "Reforzar el despliegue militar en Ceuta, Melilla, Canarias y el resto de territorios españoles del norte de África.",
    "No firmar acuerdos que afecten a la soberanía o las fronteras sin autorización de las Cortes y presentar al inicio de la legislatura una Estrategia de Acción Exterior.",
    "Defender en el presupuesto europeo 2028-2034 que la PAC y la cohesión sigan siendo políticas propias, con fondos propios y sin recortes para España.",
    "Volver a una política de equilibrio con Marruecos y Argelia y retomar el diálogo con el Reino Unido para revisar el acuerdo sobre Gibraltar.",
    "Relación con Estados Unidos que evite una guerra comercial, Iberoamérica como socio prioritario y respaldo a la opositora venezolana María Corina Machado.",
    "Considerar a China «socio, competidor y rival sistémico» y diversificar los suministros de tecnología, materias primas, energía y medicamentos.",
    "Plan inmediato de refuerzo consular con más plantilla, digitalización del registro civil consular y una centralita de emergencias de 24 horas con número único."
   ]
  },
  "estado": {
   "breve": "Derogación de la Ley de Memoria Democrática y de la Ley de Amnistía, limitación del decreto-ley y regulación de lobbies.",
   "clave": [
    "Derogar la Ley de Memoria Democrática y sustituirla por una «Ley de Concordia»; derogar la Ley de Amnistía.",
    "Convocar elecciones tras dos prórrogas presupuestarias, limitar el decreto-ley y regular los lobbies.",
    "Financiación autonómica acordada entre todas las comunidades, sin regímenes bilaterales nuevos, y caja única de la Seguridad Social blindada por ley.",
    "Castellano como lengua de trabajo en el Congreso y reforma de RTVE, EFE, el CIS y el INE para reforzar su independencia."
   ],
   "mas": [
    "Reforzar el control del voto por correo e impedir presentarse a elecciones a condenados por terrorismo o corrupción grave y a quienes estén en rebeldía.",
    "Ninguna cesión en Hacienda, Seguridad Social, Defensa, política exterior o migratoria a cambio de una investidura, y publicar íntegros los pactos de gobierno.",
    "Reformar el suplicatorio y reducir los aforamientos a una concepción limitada, conforme a la Constitución y a los estándares europeos.",
    "Tribunal Constitucional: candidatos sin cargos políticos en los cinco años previos, recursos sobre derechos fundamentales resueltos en 90 días y recurso previo para leyes orgánicas institucionales.",
    "Sustituir la Ley de Secretos Oficiales de 1968 por una nueva regulación con plazos máximos de desclasificación y control judicial efectivo.",
    "Autoridad Independiente de Transparencia con capacidad sancionadora y trazabilidad digital única de contratos, subvenciones y grandes transferencias de fondos públicos.",
    "Plan Nacional de Presencia del Estado con atención especial al País Vasco, Navarra y Cataluña, y blindaje legal de la unidad de la Agencia Tributaria.",
    "Fondo de nivelación transitorio para las comunidades hasta el nuevo modelo de financiación, sin que ninguna comunidad del régimen común salga de él.",
    "Mando único de protección civil y Ley de Reconstrucción con una primera ayuda inmediata exenta de tributación para los afectados por catástrofes.",
    "Reforma legal para proteger los símbolos del Estado, restituir el Premio Nacional de Tauromaquia y aprobar una nueva Ley de Mecenazgo."
   ]
  }
 }
},
{
 "id": "vox",
 "name": "Vox",
 "nombre": "Vox",
 "ambito": "Estatal",
 "doc": "Es sentido común",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "66 páginas (formato A5), 115 medidas",
 "idioma": "Castellano",
 "estructura": [
  "Ceuta y Melilla",
  "Economía, industria y energía",
  "Inmigración",
  "Prioridad nacional",
  "Vivienda",
  "Desregulación",
  "Sector primario y mundo rural",
  "Sanidad",
  "Educación, cultura y deporte",
  "Seguridad y defensa",
  "Familia y vida",
  "Justicia y corrupción",
  "Infraestructuras y transportes"
 ],
 "resumen": "Programa de 115 medidas numeradas que pone el foco en la inmigración («ni uno más», «remigración») y en el principio de «prioridad nacional» para el acceso a vivienda, ayudas y servicios públicos. En economía propone bajadas generalizadas de impuestos compensadas con recortes del gasto, desregulación administrativa y la recuperación de la energía nuclear. En lo social plantea derogar las leyes de violencia de género y de Memoria Democrática, endurecer el Código Penal y reforzar la protección de la unidad nacional y sus símbolos.",
 "esencial": [
  "Principio de «prioridad nacional» en el acceso a vivienda, ayudas y servicios públicos",
  "Reducción de la inmigración y expulsión de extranjeros irregulares, con plan de «remigración»",
  "Bajada generalizada de impuestos compensada con recortes del gasto",
  "Recuperación del plan nuclear y reversión de las normas del Pacto Verde Europeo",
  "Derogación de las leyes de violencia de género y de Memoria Democrática",
  "Endurecimiento del Código Penal y protección de la unidad nacional y sus símbolos"
 ],
 "pdf": "pdf/vox.pdf",
 "pdfMB": "2,6 MB",
 "ejes": {
  "E1": {
   "p": 1.5,
   "e": "Bajada del IRPF, del IVA general y reducido y del Impuesto de Sociedades; «rebaja masiva de impuestos» (p. 9)."
  },
  "E2": {
   "p": 1.5,
   "e": "Reformar la Ley del Suelo, derogar la Ley de Vivienda, IVA 0 % y bonificación del 100 % del ITP en la primera vivienda (pp. 23-24); aunque grava más a compradores no comunitarios y fondos (p. 25)."
  },
  "E3": {
   "p": 1.5,
   "e": "«Derogar la legislación laboral de Sánchez» por desincentivar la contratación, y cuota cero para autónomos con ingresos bajo el SMI (pp. 9, 13); no detalla cambios en despido."
  },
  "E4": null,
  "E5": {
   "p": 1,
   "e": "Libre elección de centro en todos los niveles (p. 41) y colaboración público-privada en sanidad «cuando ayude» a reducir demoras (p. 37)."
  },
  "E6": {
   "p": 1.5,
   "e": "Reducir la deuda, eliminar el «gasto superfluo e ideológico» y reducir la Administración al «mínimo estrictamente necesario» (pp. 9-10, 29)."
  },
  "E7": {
   "p": 1,
   "e": "Derogar tres normas por cada nueva, silencio positivo y Ley de Unidad de Mercado (pp. 28-29); a la vez, rechazo al acuerdo UE-Mercosur y preferencia comunitaria (p. 33)."
  },
  "E8": null,
  "S1": {
   "p": 2,
   "e": "«Remigración»: plan para facilitar el retorno de extranjeros que no contribuyan o vivan de subsidios, repatriación de quienes estén en situación ilegal, deportaciones y «prioridad nacional» (pp. 15, 19)."
  },
  "S2": {
   "p": 1,
   "e": "«Defensa del derecho a la vida desde su concepción hasta la muerte natural y fin de la cultura de la muerte», con objeción de conciencia y cuidados paliativos; no detalla derogar ni restringir la ley (p. 52)."
  },
  "S3": {
   "p": 1,
   "e": "El deporte femenino debe regirse por «criterios biológicos» (p. 43); no trata otras cuestiones LGTBI."
  },
  "S4": {
   "p": 1.5,
   "e": "Ampliar la prisión permanente revisable y rebajar la edad de responsabilidad penal (p. 45)."
  },
  "S5": {
   "p": 1,
   "e": "Agravar las penas por ofensas y ultrajes a la bandera, el escudo, el himno y la Corona (p. 56)."
  },
  "S6": {
   "p": 1.5,
   "e": "Derogar las leyes de género que, según el documento, «han criminalizado a los hombres» (p. 30)."
  },
  "S7": {
   "p": 1,
   "e": "Protección de las tradiciones religiosas y populares (p. 56); prohibir burka y niqab y eliminar menús halal (p. 42)."
  },
  "S8": {
   "p": 1.5,
   "e": "«Superación» de las leyes ideológicas «tales como la de Memoria Democrática» (p. 30)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Prioridad nacional en vivienda protegida y ayudas al alquiler, derogación de la Ley de Vivienda y desalojo rápido de viviendas ocupadas.",
   "clave": [
    "«Prioridad nacional»: acceso preferente de los españoles a la vivienda protegida, social y a las ayudas al alquiler.",
    "Reformar la Ley del Suelo, derogar la Ley de Vivienda y ampliar la vivienda protegida mediante colaboración público-privada.",
    "IVA del 0 % en la compra de la primera vivienda nueva y bonificación del 100 % del ITP en la usada; recuperar la deducción por vivienda habitual.",
    "Desalojo de viviendas ocupadas en menos de 24 horas y tipificar el impago reiterado del inquilino («inquiocupación») como estafa.",
    "Exigir residencia legal para firmar un alquiler y aplicar una fiscalidad más alta a compradores no comunitarios y a operaciones especulativas de fondos."
   ],
   "mas": [
    "Incentivos fiscales al alquiler de larga duración y deducciones fiscales para los inquilinos españoles.",
    "Regular la proliferación de viviendas de uso turístico (VUT) y reforzar el servicio de inspección de pisos turísticos ilegales.",
    "Asistencia jurídica gratuita a los propietarios afectados por la «okupación» y exención de impuestos, cargas fiscales y suministros del inmueble mientras dure; endurecer el Código Penal.",
    "Control del fraude en el empadronamiento y fin de los «pisos patera», los domicilios ficticios y los alojamientos ilegales.",
    "Reducir los impuestos que gravan todo el proceso de edificación y mejorar los instrumentos de financiación para promotores y constructores.",
    "Fiscalidad intermedia para las compras destinadas a alquiler de larga duración; lo recaudado con la fiscalidad agravada irá a bonificar la compra y a construir vivienda protegida.",
    "Aumentar la inversión pública en vivienda por habitante mediante cesiones de suelo, subvenciones, avales a la financiación y créditos blandos.",
    "Auditoría del patrimonio inmobiliario del Estado para destinarlo a vivienda o servicios públicos y Plan Nacional de Rehabilitación del Patrimonio Inmobiliario."
   ]
  },
  "empleo": {
   "breve": "Derogación de la legislación laboral vigente, cuota cero para autónomos que no alcancen el salario mínimo y reindustrialización.",
   "clave": [
    "Derogar la legislación laboral del actual Gobierno.",
    "Autónomos: cuota de cero euros si no llegan al salario mínimo y cuota progresiva desde 50 € por encima.",
    "Plan Nacional de Reindustrialización para frenar deslocalizaciones y pérdida de empleo industrial."
   ],
   "mas": [
    "Fomentar la industria turística con medidas fiscales y de promoción interior y exterior, impulsando el turismo rural, de montaña e interior.",
    "Combatir la «brecha maternal» facilitando la formación, permanencia, promoción y reincorporación al trabajo de las madres que interrumpieron su carrera por la maternidad o los cuidados.",
    "Incentivos y bonificaciones fiscales a las empresas que favorezcan la conciliación familiar y laboral, y más presupuesto para conciliación.",
    "Facilitar la implantación de la inteligencia artificial en pymes y autónomos y formar a trabajadores y jóvenes para aprovecharla.",
    "Plan de retorno para los españoles que emigraron en los últimos años por falta de oportunidades y desean volver.",
    "Actualizar el complemento de insularidad del personal del sector público estatal en Baleares y Canarias para adaptarlo al coste de vida real."
   ]
  },
  "impuestos": {
   "breve": "Bajada del IRPF por número de hijos, del IVA y del Impuesto de Sociedades, con recorte del gasto considerado superfluo.",
   "clave": [
    "Bajar el IRPF (con tipos según el número de hijos), el IVA general y reducido y el Impuesto de Sociedades.",
    "Reducir la deuda y recortar el gasto que considera «superfluo e ideológico»; eliminar progresivamente las subvenciones a partidos, sindicatos, patronales y ONG.",
    "Bajada general de los impuestos sobre la electricidad.",
    "Impuesto sobre las remesas de dinero enviadas al extranjero.",
    "Tipos fiscales mínimos en zonas despobladas; bajar el IGIC y suprimir el AIEM en Canarias."
   ],
   "mas": [
    "Revisión y reducción sistemática de todos los impuestos y tasas que, según el documento, lastran a trabajadores, familias y empresas.",
    "Auditoría pública y sistemática de los gastos no imprescindibles de las administraciones y reducción del tamaño de la Administración «al mínimo estrictamente necesario».",
    "Bonificación del 100 % de la ayuda en el hogar, menor fiscalidad de los productos infantiles de primera necesidad y deducciones por material escolar y extraescolares.",
    "Rebajar los impuestos al arte y los espectáculos en vivo y aprobar una nueva Ley de Mecenazgo que eleve las deducciones en el IRPF.",
    "Limitar el importe de las multas de tráfico y estacionamiento que no comprometan gravemente la seguridad vial, para que respondan a la gravedad y no a criterios recaudatorios."
   ]
  },
  "pensiones": {
   "breve": "Pensiones garantizadas con crecimiento económico y natalidad, ingreso mínimo solo para españoles y prioridad nacional en prestaciones.",
   "clave": [
    "Garantizar las pensiones mediante crecimiento económico y medidas de natalidad.",
    "Ingreso Mínimo Vital solo para españoles y promover el retorno de los inmigrantes que lo cobran.",
    "«Prioridad nacional» en ayudas, prestaciones y servicios sociales; ninguna ayuda a inmigrantes en situación irregular.",
    "Cotización pagada por el Estado a quienes se dediquen a cuidar a sus hijos; más presupuesto para dependencia y plazas de residencia."
   ],
   "mas": [
    "Eliminar las trabas que impiden que las ayudas a la dependencia lleguen de forma rápida e íntegra a sus beneficiarios.",
    "Más ayudas para el cuidado en el hogar y para familiares a cargo, y más programas contra la soledad no deseada.",
    "Reforzar bonificaciones y deducciones para personas con discapacidad, suprimir barreras arquitectónicas y desburocratizar el reconocimiento de la discapacidad y la dependencia.",
    "Plan de inversiones para recuperar barrios, municipios y provincias que el documento considera abandonados durante décadas por los poderes públicos."
   ]
  },
  "sanidad": {
   "breve": "Tarjeta sanitaria única, reducción de listas de espera con colaboración público-privada y exclusión de irregulares salvo urgencia grave.",
   "clave": [
    "Tarjeta sanitaria única y que no se exija la lengua cooficial para acceder a plazas sanitarias.",
    "Plan de reducción de listas de espera, con colaboración público-privada cuando reduzca demoras.",
    "Excluir de la sanidad pública a extranjeros en situación irregular, salvo urgencia grave.",
    "Red de Centros Nacionales de Oncología y mejoras salariales para el personal sanitario."
   ],
   "mas": [
    "Reforzar la atención primaria y pediátrica en todo el territorio, con especial atención a las zonas rurales y de difícil cobertura.",
    "Incentivos para plazas rurales o de difícil cobertura, contratos estables y contratos puente tras la residencia, y programa de retorno de sanitarios españoles en el extranjero.",
    "Publicar indicadores comparables y periódicos de listas de espera, actividad y resultados del sistema sanitario.",
    "Auditoría del coste de la inmigración en la sanidad pública y fin del «turismo sanitario».",
    "Reforzar la prevención y el diagnóstico precoz del cáncer de mama y ginecológico, y la atención en embarazo, parto y posparto.",
    "Mapa de infraestructuras sanitarias urgentes con plan de inversiones directas e impulso a la investigación en enfermedades raras, crónicas y neurodegenerativas.",
    "Reforzar la Estrategia Nacional de Salud Mental y potenciar los cuidados paliativos dentro de la cartera de servicios sanitarios."
   ]
  },
  "educacion": {
   "breve": "Derogación de la LOMLOE, enseñanza en español y aulas de nivelación para alumnos con poco dominio del idioma.",
   "clave": [
    "Derogar la LOMLOE; currículo, evaluaciones y selectividad únicos en toda España; enseñanza en español en todo el territorio.",
    "Libre elección de centro y «prioridad nacional» en guarderías, becas de comedor y transporte.",
    "Limitar por aula los alumnos «procedentes de otras culturas» o con poco dominio del español, con aulas de nivelación previas.",
    "Eliminar los menús halal y el programa de Lengua Árabe y Cultura Marroquí; prohibir el burka y el niqab en espacios públicos."
   ],
   "mas": [
    "Mejorar el sistema de becas universitarias y preuniversitarias para que la situación económica no impida estudiar.",
    "Prohibir los móviles en clase, reforzar la autoridad del profesor y aprobar un plan nacional contra el acoso escolar y el ciberacoso.",
    "Eliminar los contenidos que el documento considera «ideológicos» y potenciar matemáticas, lectura, humanidades y ciencias.",
    "Distrito único escolar, apuesta por la Formación Profesional y FP específica para el sector primario en centros públicos y concertados.",
    "Revisar las homologaciones de títulos extranjeros y reforzar la exigencia académica, eliminando las diferencias de contenidos curriculares entre territorios.",
    "Garantizar la libertad de cátedra del profesorado universitario frente a lo que el documento denomina «imposiciones de la corrección política».",
    "Difundir la historia común española y conservar el patrimonio, con atención a iglesias y monumentos rurales, y protegerlo frente al vandalismo.",
    "Defensa de la tauromaquia, promoción y difusión del arte taurino y potenciación de las actividades vinculadas a esta tradición.",
    "Selecciones nacionales únicas en competiciones internacionales, becas a deportistas y rebajas fiscales a clubes y federaciones."
   ]
  },
  "inmigracion": {
   "breve": "«Ni uno más»: prohibición de regularizaciones, supresión del arraigo, repatriación de irregulares y expulsión por delitos graves.",
   "clave": [
    "«Ni uno más»: prohibir las regularizaciones, suprimir el arraigo y que quien entre de forma irregular nunca pueda regularizarse.",
    "Repatriar a quienes estén en situación irregular y plan de «remigración» para extranjeros que, según el documento, «no contribuyan o vivan de subsidios».",
    "Expulsión por delitos graves o reiterados; requisitos más duros para la nacionalidad y más supuestos de pérdida.",
    "Devolver a los menores no acompañados con sus familias o a las instituciones de su país; retirar toda ayuda pública a ONG que colaboren con la inmigración irregular.",
    "Impuesto sobre las remesas y fin de la cooperación con países que no colaboren en el control migratorio."
   ],
   "mas": [
    "Revisar las concesiones fraudulentas de la nacionalidad y revocar las «pasarelas rápidas» para obtenerla.",
    "Deportar a quienes, según el documento, «traten de imponer costumbres, hábitos o culturas ajenas» al modo de vida español o incompatibles con la dignidad de las mujeres.",
    "Perseguir a ONG o redes que participen en lo que el documento llama «sustracción o secuestro de menores».",
    "Excluir la nacionalidad, la residencia y los permisos de trabajo de extranjeros de la regla general de silencio administrativo positivo.",
    "Promover sanciones contra los Estados que fomenten la inmigración irregular o la usen como arma de presión política.",
    "Expulsión inmediata de quienes el documento denomina «invasores» en Ceuta y Melilla."
   ]
  },
  "energia": {
   "breve": "Recuperación de la energía nuclear, con nuevas centrales, eliminación de restricciones a recursos naturales y Plan Nacional del Agua.",
   "clave": [
    "Recuperar el plan nuclear: derogar el calendario de cierre y estudiar nuevas centrales junto a las actuales.",
    "Revertir las normas del Pacto Verde Europeo (prohibición de motores de combustión, impuestos al CO2) y las Zonas de Bajas Emisiones.",
    "Eliminar restricciones para explotar recursos naturales y yacimientos minerales.",
    "Plan Nacional del Agua con interconexión de todas las cuencas e impedir macroplantas renovables en suelo agrícola."
   ],
   "mas": [
    "Suprimir el tope regulatorio a la inversión en redes eléctricas y resolver las autorizaciones de líneas y subestaciones en plazos cerrados con silencio positivo.",
    "Plan Nacional de Soberanía Energética y fin de la doble imposición sobre la energía eléctrica.",
    "Plan nacional de infraestructuras con más inversión en carreteras, ferrocarril, obras hidráulicas, telecomunicaciones, nodos logísticos y puertos.",
    "Priorizar la seguridad ferroviaria, Cercanías y Media Distancia; auditar el estado de la red y electrificar las líneas convencionales para conectar la España rural.",
    "Concluir las obras contra inundaciones pendientes, conservar los cauces, adecuar barrancos y desarrollar las infraestructuras hidráulicas necesarias para proteger vidas y hogares.",
    "Reducir la dependencia de materias primas, componentes y tecnologías críticas, primando la seguridad económica y la soberanía industrial.",
    "Mejorar las ayudas al transporte entre Canarias o Baleares y la Península para aliviar el «esfuerzo fiscal extra» que soportan los residentes insulares.",
    "Limpieza y aprovechamiento de los montes, revisión de restricciones ambientales que dificultan la prevención de incendios y más medios contra ellos."
   ]
  },
  "economia": {
   "breve": "Plan Nacional de Reindustrialización, derogación de tres normas por cada nueva y rechazo al acuerdo UE-Mercosur.",
   "clave": [
    "Plan Nacional de Reindustrialización y suspender acuerdos internacionales que limiten la producción.",
    "Derogar tres normas por cada nueva, silencio administrativo positivo como regla y Ley de Unidad de Mercado.",
    "Rechazo al acuerdo UE-Mercosur, oposición a recortar la PAC y revisión de la política pesquera común.",
    "Defensa de la caza y fondo de compensación frente a las normas europeas."
   ],
   "mas": [
    "Más inversión e incentivos fiscales a la I+D+i, transferencia de conocimiento a las pymes y plan para recuperar el talento emigrado.",
    "Impulsar la investigación, el desarrollo y la aplicación de la inteligencia artificial como motor de la economía nacional.",
    "Cláusulas espejo en los acuerdos comerciales, recuperar la preferencia comunitaria y más controles en frontera y contra el fraude en el etiquetado.",
    "Vincular el reparto de los fondos de la PAC a una variable que prime la despoblación y suprimir exigencias burocráticas y medioambientales.",
    "Fin de cualquier transferencia de fondos públicos a proyectos de países extracomunitarios que compitan con la producción agroalimentaria española.",
    "Declaración responsable y silencio administrativo positivo como norma en los procedimientos del medio rural; revisar y reforzar el Sistema Español de Seguros Agrarios.",
    "Más inversión para inundaciones, granizadas y plagas que afecten a la sanidad animal y vegetal.",
    "Apoyar el relevo generacional y la incorporación de jóvenes al sector primario y a las cooperativas agroalimentarias.",
    "Derogar cualquier normativa que imponga cargas o sobrecostes a agricultores, ganaderos y pescadores."
   ]
  },
  "igualdad": {
   "breve": "Derogación de las leyes de violencia de género, ampliación de beneficios de familia numerosa y defensa de la vida desde la concepción.",
   "clave": [
    "Derogar las leyes de violencia de género, que según el documento «han criminalizado a los hombres».",
    "Extender los beneficios de familia numerosa a todas las familias desde el primer hijo y 0 a 3 años gratuito.",
    "Defensa de la vida «desde su concepción hasta la muerte natural» y objeción de conciencia para sanitarios y farmacéuticos.",
    "El deporte femenino debe regirse por criterios biológicos."
   ],
   "mas": [
    "Plan nacional de natalidad con ayudas para vivienda, compra de vehículos por necesidades familiares y bonificaciones crecientes según el número de hijos.",
    "Bonificación del 100 % de la ayuda en el hogar y bonificaciones a las empresas que fomenten la conciliación o hagan descuentos a las familias.",
    "Sustituir las leyes de género por normas que, según el documento, «protejan de verdad» a las mujeres víctimas, y combatir las denuncias falsas.",
    "Reforzar la prevención, la protección policial y judicial y la asistencia integral a las mujeres víctimas de violencia y agresiones sexuales.",
    "Proteger a los menores frente a los riesgos digitales, como la adicción al juego o la pornografía.",
    "Más servicios complementarios de aula en los centros educativos para facilitar la conciliación."
   ]
  },
  "seguridad": {
   "breve": "Menor edad de responsabilidad penal, prisión permanente revisable ampliada e ilegalización de partidos que atenten contra la unidad de España.",
   "clave": [
    "Rebajar la edad de responsabilidad penal de los menores y ampliar la prisión permanente revisable.",
    "Que los jueces elijan a los 12 vocales judiciales del CGPJ y reformar el Tribunal Constitucional.",
    "Recuperar la sedición, endurecer la malversación y prohibir los indultos por corrupción o contra la unidad territorial.",
    "Ilegalizar partidos y organizaciones que atenten contra la unidad de España y endurecer las penas por ultrajes a sus símbolos.",
    "Policía y Guardia Civil como profesión de riesgo y restablecer el organismo de coordinación contra el narcotráfico en el sur (OCON-Sur)."
   ],
   "mas": [
    "Plantear eliminar la inimputabilidad de los menores en delitos violentos como homicidios o agresiones sexuales.",
    "Que los directores generales de la Guardia Civil y la Policía Nacional sean expertos en seguridad y no cargos de partido.",
    "Equiparación salarial de Policía, Guardia Civil y funcionarios de prisiones, y reconocimiento de estos últimos como profesión de riesgo.",
    "Garantizar la idoneidad, imparcialidad, competencia profesional e independencia del Fiscal General del Estado y acabar con lo que el documento llama «colonización partidista» de la justicia.",
    "Reforma integral del sistema judicial y más inversión en sedes judiciales y profesionales de la justicia.",
    "Auditoría integral de las administraciones contra la corrupción y responsabilidad patrimonial de los cargos condenados con todos sus bienes presentes y futuros.",
    "Más medios para los juzgados y las unidades de Guardia Civil y Policía Nacional especializadas en corrupción.",
    "Ley contra el enaltecimiento del terrorismo y los homenajes a terroristas; considerar los delitos de ETA crímenes de lesa humanidad imprescriptibles y suprimir beneficios penitenciarios.",
    "Endurecer las penas a los incendiarios y coordinar con protocolos comunes a bomberos y protección civil de las distintas administraciones."
   ]
  },
  "exterior": {
   "breve": "Más inversión en defensa, sanciones a Marruecos hasta que respete las fronteras y militarización de Ceuta y Melilla.",
   "clave": [
    "Más inversión en defensa y participación de las Fuerzas Armadas en la protección de fronteras.",
    "Sanciones y suspensión de acuerdos con Marruecos hasta que respete las fronteras; militarizar la frontera de Ceuta y Melilla.",
    "Toda la presión internacional necesaria para recuperar la soberanía sobre Gibraltar.",
    "Promover el procesamiento del presidente del Gobierno y su Ejecutivo por su actuación en la crisis de Ceuta."
   ],
   "mas": [
    "Nuevo modelo de protección permanente de las fronteras terrestres, marítimas y aéreas, con lucha contra las mafias, las amenazas híbridas y el «terrorismo islámico».",
    "Sueldos dignos, ayudas a la movilidad y a la vivienda para los militares y reconocimiento de las Fuerzas Armadas como profesión de riesgo.",
    "Más medios humanos, materiales y presupuestarios para Fuerzas Armadas, CNI, Guardia Civil, Policía Nacional, Vigilancia Aduanera e Instituciones Penitenciarias.",
    "Reforzar la ciberseguridad y la protección de infraestructuras críticas, y el Sistema Nacional de Protección Civil.",
    "Desmantelar redes de contrabando y blanqueo con origen en Gibraltar, recuperar el control de las aguas y plan de inversiones para el Campo de Gibraltar.",
    "Plan de inversiones para Ceuta y Melilla y reparación de las consecuencias de la crisis migratoria en Ceuta."
   ]
  },
  "estado": {
   "breve": "Superación de la Ley de Memoria Democrática, Ley de Unidad de Mercado, reforma de RTVE y protección de símbolos nacionales.",
   "clave": [
    "«Superación» de la Ley de Memoria Democrática y de otras leyes que el documento califica de «ideológicas» y «divisivas».",
    "Ley de Unidad de Mercado: lo que es legal en una comunidad lo es en toda España.",
    "Reforma de RTVE y máxima protección jurídica a la bandera, el escudo, el himno y la Corona.",
    "Defensa de las tradiciones, usos y costumbres de España."
   ],
   "mas": [
    "Ventanilla y dato único: expediente digital centralizado que obligue a las administraciones a compartir los datos de ciudadanos y empresas.",
    "Fin de la cita previa obligatoria: derecho a ser atendido presencialmente de inmediato en cualquier oficina pública.",
    "Revisión permanente de toda actuación administrativa para suprimir lo innecesario y simplificar el resto, en todos los niveles de la Administración.",
    "Implantar la inteligencia artificial en las administraciones para reducir burocracia, garantizando siempre la atención presencial.",
    "Garantizar la libertad de expresión frente a lo que el documento llama «deriva censora» del Gobierno.",
    "Garantizar igual calidad de educación, sanidad, seguridad y justicia con independencia del lugar de España donde se resida."
   ]
  }
 }
},
{
 "id": "fa",
 "name": "Frente Amplio",
 "nombre": "Frente Amplio",
 "ambito": "Estatal",
 "doc": "Programa electoral Frente Amplio",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "151 páginas",
 "idioma": "Castellano",
 "estructura": [
  "Vivienda",
  "Derechos sociales",
  "Reforma fiscal",
  "Salarios, pensiones y precios",
  "Transición ecológica",
  "Política industrial",
  "Agricultura, ganadería y pesca",
  "Autónomos, pymes y economía social",
  "Despoblación e insularidad",
  "Empleo público",
  "Financiación autonómica",
  "Ayuntamientos",
  "Democratización económica",
  "Poder digital y pluralismo informativo",
  "Igualdad",
  "Migraciones y antirracismo",
  "Seguridad humana, paz y Europa",
  "Democracia avanzada"
 ],
 "resumen": "Programa de 18 capítulos que sitúa la vivienda como eje (parque público financiado con el 1 % del PIB, topes de alquiler y expropiación a grandes tenedores), junto a la reducción de la jornada a 32 horas, una reforma fiscal que grava a grandes empresas, patrimonios y herencias, y la ampliación del sector público (banca pública, redes eléctricas, farmacéutica). En lo institucional propone una República federal y plurinacional, la laicidad del Estado y la reducción del gasto militar.",
 "esencial": [
  "Parque público de vivienda financiado con el 1 % del PIB y expropiación a grandes tenedores",
  "Jornada reducida sin pérdida salarial y salario mínimo ligado al salario medio",
  "Reforma fiscal que grava a grandes empresas, patrimonios y herencias",
  "Ampliación del sector público con banca pública, empresa farmacéutica y control de precios",
  "República federal y plurinacional con laicidad del Estado",
  "Reducción del gasto militar y firma del Tratado sobre armas nucleares"
 ],
 "pdf": "pdf/fa.pdf",
 "pdfMB": "1,1 MB",
 "ejes": {
  "E1": {
   "p": -2,
   "e": "Herencias con tipo marginal del 100 % desde 10 M€ y límite de 10 M€ a las herencias de «ultrarricos», más tasa Zucman del 3 %, patrimonio mínimo del 2 % e IRPF hasta el 52 % (pp. 50-51)."
  },
  "E2": {
   "p": -1.5,
   "e": "Parque público con el 1 % del PIB y expropiación a grandes tenedores (p. 13), prohibir la compra no residencial a empresas (p. 14) y tope de alquiler con rebaja media del 35 % (p. 16)."
  },
  "E3": {
   "p": -1.5,
   "e": "SMI del 60 % del salario medio (p. 57), despido «reparador y disuasorio» y autorización previa en despidos colectivos (pp. 58-59), 32 horas sin rebaja salarial (p. 61)."
  },
  "E4": {
   "p": -1.5,
   "e": "Titularidad pública de las redes eléctricas y de gas (p. 70), farmacéutica pública (p. 33), SEPI como agencia industrial y banca pública a partir de Correos, ICO y CaixaBank (pp. 89, 93)."
  },
  "E5": {
   "p": -1.5,
   "e": "Derogar la Ley 15/1997 y revertir privatizaciones sanitarias (p. 30), 100 % de fondos públicos a la escuela pública (p. 35) y vetar al capital riesgo en hospitales, residencias y colegios (p. 135)."
  },
  "E6": {
   "p": -1.5,
   "e": "Superar el Pacto de Estabilidad y financiación directa del BCE a los Estados (pp. 161-162), reformar el art. 135 de la Constitución (p. 168) y sacar gastos de la regla de gasto (p. 127)."
  },
  "E7": {
   "p": -1.5,
   "e": "Precios máximos en la cesta básica, impuesto sobre márgenes excesivos y facultad de la CNMC para fijar precios máximos en sectores estratégicos (pp. 62-63)."
  },
  "E8": {
   "p": -1.5,
   "e": "Revalorización con el IPC en la Constitución, jubilación a los 65 y a los 60 en oficios duros (pp. 63-64) y eliminar deducciones por planes de pensiones privados (p. 51)."
  },
  "S1": {
   "p": -1.5,
   "e": "Regularización estable y permanente, derogar el «rechazo en frontera», cerrar los CIE y voto municipal a residentes migrantes (pp. 149-151)."
  },
  "S2": {
   "p": -1.5,
   "e": "Incluir el aborto en el art. 43 de la Constitución (p. 32) y reconocer la eutanasia y el suicidio asistido en una Ley de Libertad de Conciencia (p. 177)."
  },
  "S3": {
   "p": -1.5,
   "e": "Despliegue de la Ley Trans, reconocimiento de personas no binarias y atención trans despatologizada (p. 145)."
  },
  "S4": {
   "p": -1.5,
   "e": "Derogar la «Ley Mordaza» (p. 169), desmilitarizar la Guardia Civil, prohibir pelotas de goma y crear un órgano externo de control policial (pp. 171-172)."
  },
  "S5": {
   "p": -1.5,
   "e": "Derogar los delitos contra los sentimientos religiosos, contra la Corona, de ultrajes a España y de enaltecimiento del terrorismo (pp. 169-170)."
  },
  "S6": {
   "p": -1.5,
   "e": "5 % del presupuesto a igualdad, +10 % anual contra la violencia machista, suspensión automática de visitas y ampliación de la violencia vicaria (p. 42)."
  },
  "S7": {
   "p": -1,
   "e": "Revisar los Acuerdos de 1979 con la Santa Sede, suprimir financiación y exenciones a las confesiones y recuperar los bienes inmatriculados (p. 177)."
  },
  "S8": {
   "p": -1.5,
   "e": "Reparación como derecho subjetivo, cierre de fundaciones franquistas, víctimas de 1978-1983 y resignificación de Cuelgamuros (pp. 173-174)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Parque público financiado con el 1 % del PIB, topes de alquiler, expropiación a grandes tenedores y prohibición de desahucios vulnerables.",
   "clave": [
    "Destinar el 1 % del PIB al año (unos 17.000 M€) a un parque público: 1,5 millones de viviendas en 12 años y el 20 % del parque total en 2035. Alquiler público de máximo 600 €/mes (80 m²) y nunca más del 25 % de la renta.",
    "Expropiación progresiva de las viviendas de grandes tenedores corporativos: primero quienes tengan más de 1.000, después más de 700 y después más de 50 inmuebles.",
    "Prohibir que empresas con ánimo de lucro compren vivienda para fines distintos de la residencia habitual o el alquiler asequible regulado.",
    "En zonas tensionadas, tope de alquiler igual al menor entre el 25 % de la renta media del barrio y el índice estatal; eliminar en 3 años las licencias de pisos turísticos.",
    "Prohibir los desahucios de personas vulnerables sin alternativa habitacional y reformar el artículo 47 de la Constitución para que el derecho a la vivienda sea exigible ante los tribunales."
   ],
   "mas": [
    "Reservar por ley el 90 % de la edificabilidad residencial a vivienda habitual (100 % en zonas tensionadas) y al menos el 40 % a vivienda protegida, mayoritariamente en alquiler asequible.",
    "Contrato de alquiler indefinido por defecto; mientras tanto, prórrogas automáticas de 5 años (7 si el casero es persona jurídica) e indemnización de 12 mensualidades por rescisión no justificada.",
    "Rebaja adicional obligatoria del 30 % sobre el alquiler regulado en municipios de más de 200.000 habitantes o con masificación turística severa, y declaración automática de zonas tensionadas.",
    "Crear la Agencia Estatal de la Vivienda, con inspección propia y multas de hasta 1.000.000 €, y un Registro Estatal de Arrendamientos obligatorio antes de anunciar o firmar un alquiler.",
    "Suprimir el régimen fiscal especial de SOCIMI y EDAV e implantar un impuesto del 10 % sobre el valor de los pisos (empresas desde el primero, particulares desde el cuarto si superan 800.000 €), salvo alquiler asequible.",
    "Recargo del 100 % en la compra de vivienda no habitual y, en el ITP, recargos del 200 % en la segunda vivienda y del 1.000 % desde la tercera, con exención en la primera vivienda.",
    "Escudo hipotecario de hasta 300 € al mes vía IRPF para hogares con menos de 3 IPREM cuya hipoteca supere el 40 % de sus ingresos, dación en pago e hipoteca pública a tipo fijo obligatoria en todos los bancos.",
    "Contribución empresarial del 0,45 % de la masa salarial en empresas de 50 o más empleados, para recaudar unos 1.000 M€ y promover unas 10.000 viviendas asequibles al año.",
    "Rehabilitar energéticamente 2,5 millones de viviendas de familias vulnerables en 10 años, con una subvención pública de entre el 80 % y el 95 % del coste.",
    "Reconocer legalmente a los sindicatos de inquilinas, regular la huelga de alquileres y prohibir el software de fijación de rentas, con multas de hasta el 10 % de la facturación global."
   ]
  },
  "empleo": {
   "breve": "Jornada de 32 horas sin reducción salarial, salario mínimo del 60 % del salario medio y reforma del despido improcedente.",
   "clave": [
    "Jornada máxima de 32 horas sin reducción salarial: 37,5 horas de inmediato y 35 horas en el sector público.",
    "Salario mínimo con un suelo legal del 60 % del salario medio neto; prohibir que se compense con complementos.",
    "Mismo salario en contratas y subcontratas que en la empresa principal; ultraactividad indefinida de los convenios.",
    "Indemnización por despido improcedente «reparadora y disuasoria» y autorización administrativa previa para despidos colectivos.",
    "Prestación por desempleo del 80 % de la base los primeros seis meses; presunción de relación laboral en todas las plataformas digitales."
   ],
   "mas": [
    "Gravamen del 30 % sobre el beneficio que supere la media de tres años en empresas con más de 50 M€ de facturación cuando los salarios de su plantilla suban menos que la inflación o el AENC.",
    "Cláusula subsidiaria de revisión salarial conforme al IPC en los convenios colectivos y envío de los datos del Observatorio de Márgenes Empresariales a las mesas de negociación.",
    "Generalizar la jornada continua, limitar la jornada partida a supuestos negociados con compensación salarial y crear un registro de jornada digital con acceso remoto de la Inspección de Trabajo.",
    "Permitir autojustificar ausencias por problemas leves de salud hasta 3 días seguidos y 6 al año, y prohibir los pluses de asistencia que penalicen las bajas médicas.",
    "Cotización adicional a la Seguridad Social para empresas que despidan por implantar inteligencia artificial o automatización, y capacidad del comité de empresa para vetar sistemas de IA de control laboral.",
    "Delegado sindical compartido para las microempresas de hasta 6 trabajadores, elegido por cada grupo de 50 a 100 negocios del mismo sector y territorio.",
    "Plan de Empleo Garantizado para parados de larga duración y jóvenes mediante convenios con administraciones territoriales, con el objetivo de bajar el paro al 7 % y superar el 70 % de empleo.",
    "Reducir la temporalidad en el sector público hasta el 8 % (10 puntos el primer año) y subidas salariales a los empleados públicos con cláusula de garantía de poder adquisitivo.",
    "Estatuto de las personas en prácticas contra el trabajo gratuito, teletrabajo voluntario y reversible con gastos a cargo de la empresa y eliminación de las dobles escalas salariales.",
    "Aprobar en seis meses el reglamento de riesgos psicosociales y garantizar por ley que solo la sanidad pública controle las altas y bajas por contingencias comunes, sin ampliar el papel de las mutuas."
   ]
  },
  "impuestos": {
   "breve": "Tipo mínimo del 20 % para grandes grupos, gravamen a patrimonios y herencias y subida del IRPF en rentas altas.",
   "clave": [
    "Tipo mínimo efectivo del 20 % en el Impuesto de Sociedades para grandes grupos y gravamen permanente del 1,2 % a las grandes energéticas.",
    "Patrimonios de más de 1 M€: al menos el 2 %. Patrimonios de más de 50 M€: impuesto del 3 % anual («tasa Zucman»).",
    "Impuesto estatal a herencias de más de 1 M€ (hasta el 34 %) y tipo del 100 % sobre lo que supere 10 M€ por heredero.",
    "Bajar el IRPF a rentas del trabajo de hasta 27.000 € y subir el tipo máximo hasta el 52 % desde 300.000 €.",
    "Duplicar en cuatro años la plantilla de la Agencia Tributaria y subir el impuesto a servicios digitales al 15 %."
   ],
   "mas": [
    "Suprimir el régimen de consolidación fiscal de los grupos empresariales y limitar a 4 años la compensación de pérdidas en el Impuesto sobre Sociedades.",
    "Subir el Impuesto sobre Depósitos Bancarios del 0,03 % al 1 % en un tramo estatal y mantener de forma estructural el gravamen específico a la banca.",
    "Acercar la tributación de las rentas del capital a la del trabajo y eliminar las deducciones por planes de pensiones privados individuales y el régimen especial de trabajadores desplazados.",
    "Ayuda directa de 1.000 € por hogar durante dos años para 1,4 millones de familias vulnerables, financiada con el gravamen a las energéticas y reconocida de oficio.",
    "IVA de la luz progresivo según el consumo por persona (del 0 % al 21 %), IVA reducido para peluquerías y veterinarios, superreducido para pañales y tipo cero para productos sin gluten.",
    "Eliminar la exención del IVA a la enseñanza privada y la exención del Impuesto sobre las Primas de Seguros a los seguros sanitarios privados.",
    "Ampliar el impuesto sobre transacciones financieras a renta fija (0,1 %), acciones (0,2 %) y derivados (0,3 %) y crear un gravamen sobre aviones privados, yates y coches de lujo.",
    "Impuesto a la minería extractiva (más de 470 M€ al año), gravar el queroseno de los vuelos nacionales y equiparar la fiscalidad del diésel a la de otros combustibles fósiles.",
    "Gravar el juego con un tipo del 10 % sobre la cantidad bruta apostada y fijar en las SICAV un tope de concentración por accionista y un máximo de 4 años para mantener plusvalías.",
    "Reformar el artículo 135 de la Constitución para que la estabilidad presupuestaria no se aplique cuando el paro o la pobreza superen la media de los cinco mejores países de la UE."
   ]
  },
  "pensiones": {
   "breve": "Pensiones públicas en la Constitución, jubilación a los 65 años con excepciones para oficios duros y prestación por crianza.",
   "clave": [
    "Incluir en la Constitución las pensiones públicas, su revalorización con el IPC y una pensión mínima igual al salario mínimo.",
    "Volver a la jubilación a los 65 años; a los 60 en oficios especialmente duros (construcción, limpieza, ayuda a domicilio, camareras de piso, pesca); sin penalización con más de 40 años cotizados.",
    "Prestación universal por crianza de 200 € al mes por cada menor de 18 años.",
    "Subir el Ingreso Mínimo Vital para que ningún hogar quede por debajo del 40 % de la renta media; bono social eléctrico automático."
   ],
   "mas": [
    "Subir de inmediato el IPREM 100 € hasta un suelo de 700 € mensuales y actualizarlo cada año conforme al IPC acumulado.",
    "Conceder el Ingreso Mínimo Vital de oficio cruzando datos fiscales, con el objetivo del 60 % de la renta mediana autonómica, y extenderlo a jóvenes de 18 a 30 años.",
    "Elevar la inversión pública en dependencia del 0,8 % al 1,7 % del PIB en 2030, eliminar copagos y reconocer por ley un «derecho al respiro» de un mes al año.",
    "Prohibir por ley los cortes de luz, agua y gas a hogares vulnerables y sustituir los bonos sociales por una tarifa social de la energía con un mínimo vital.",
    "Subir las pensiones contributivas más bajas y las no contributivas por encima de la media para reducir la brecha de género, reconociendo los periodos dedicados a cuidados.",
    "Seguir elevando el tope máximo de cotización y reforzar el mecanismo de equidad intergeneracional con una aportación adicional de las empresas más automatizadas.",
    "Publicar de inmediato la auditoría independiente de las cuentas de la Seguridad Social (1967-2019) prevista en la Ley 21/2021.",
    "Elevar la inversión en infancia y familias del 1,5 % al 2,4 % del PIB y prohibir el acogimiento residencial de menores de 6 años, eliminándolo para menores de 10 en 2030.",
    "Plan Estratégico Estatal de servicios sociales con más financiación estatal y una Ley de Profesiones de los Servicios Sociales que mejore sus condiciones laborales."
   ]
  },
  "sanidad": {
   "breve": "Un 25 % del gasto sanitario para atención primaria, empresa farmacéutica pública, dentista y gafas gratuitas.",
   "clave": [
    "Destinar el 25 % del gasto sanitario a atención primaria, revertir servicios privatizados e integrar MUFACE, MUGEJU e ISFAS en el sistema público.",
    "Ampliar la atención dental, gafas y lentillas gratuitas para toda la población y audífonos financiados.",
    "Crear una empresa farmacéutica 100 % pública.",
    "Garantizar el aborto en centros públicos de todas las comunidades y extender la prohibición de fumar a terrazas y playas."
   ],
   "mas": [
    "Comprometer desde los Presupuestos Generales del Estado un gasto sanitario público del 8 % del PIB.",
    "Ley de Gestión Pública del SNS que derogue la Ley 15/1997 y haga estrictamente excepcional la gestión indirecta, previa justificación y evaluación técnica.",
    "Blindar por ley la atención sanitaria universal para todos los residentes en España, con independencia de su situación administrativa.",
    "Fondo específico para la red de salud mental comunitaria con un mínimo de 10 profesionales por cada 100.000 habitantes y una estrategia «Cero Contenciones».",
    "Real Decreto de listas de espera que prohíba las listas paralelas, incluya por primera vez Atención Primaria y Salud Mental y mantenga en registro a los derivados a centros concertados.",
    "Impuestos específicos a bebidas energéticas, refrescos azucarados y ultraprocesados, empaquetado genérico del tabaco y prohibición de los vapeadores desechables.",
    "Ley Integral de Salud Obstétrica que tipifique la violencia obstétrica y alcance en 5 años la ratio de una matrona por mujer en parto activo.",
    "Ley Celíaca con ayudas directas para comprar alimentos sin gluten, sello oficial de control y controles de salud infantiles específicos.",
    "Banco público de prótesis y órtesis, preservativos gratuitos para jóvenes en farmacias y copas menstruales gratuitas.",
    "Libranza de la mañana anterior a las guardias de 24 horas y reclasificación profesional de todas las profesiones sanitarias según su formación."
   ]
  },
  "educacion": {
   "breve": "Escuela pública como destino de todos los fondos públicos, ratios máximas por ley y financiación de universidades públicas.",
   "clave": [
    "Hoja de ruta para que todo el alumnado estudie en la escuela pública y el 100 % de los fondos públicos vaya a ella; prohibir de inmediato las cuotas obligatorias en la concertada.",
    "Ratios máximas por ley y un máximo de 18 horas lectivas para el profesorado de secundaria y FP.",
    "Becas hasta el 0,44 % del PIB y comedor, transporte y material gratuitos.",
    "Obligar a las comunidades a dedicar al menos el 1 % de su PIB a sus universidades públicas; mismos requisitos para las privadas.",
    "Garantizar la inmersión lingüística en catalán."
   ],
   "mas": [
    "Ley de Financiación Educativa con un suelo de gasto público que llegue al 7 % del PIB en 2030.",
    "Universalizar la educación de 0 a 3 años con plazas públicas gratuitas para toda familia solicitante y ratios de 4, 6 y 8 niños según la edad.",
    "Ratios máximas de 15 alumnos en Primaria y FP, 20 en Secundaria y 23 en Bachillerato, con el alumnado NEAE computando doble.",
    "Duplicar las becas de etapas obligatorias para alumnado vulnerable de la pública (500.000 estudiantes más), subir un 60 % las becas NEAE y crear becas-salario.",
    "Máximo de 23 horas lectivas en Infantil y Primaria, Estatuto del Docente para reducir la interinidad y plan estatal de desburocratización docente.",
    "Eliminar los conciertos y subvenciones a escuelas que segreguen al alumnado por sexo o por motivos religiosos.",
    "Ampliar plazas de grado y máster en universidades públicas reduciendo precios hacia la gratuidad y abrir centros presenciales de la UNED donde falte oferta pública.",
    "Eliminar la figura de profesor sustituto universitario, aumentar las ayudas FPI y FPU, recuperar las ayudas Margarita Salas y reformar integralmente la ANECA.",
    "Plan Estatal para aprender las lenguas cooficiales en todo el Estado y currículo estatal con contenidos de valores democráticos, igualdad y memoria democrática.",
    "Unidades de emergencia de salud mental y prevención del suicidio en el ámbito educativo e incluir la alfabetización digital como competencia clave desde Primaria."
   ]
  },
  "inmigracion": {
   "breve": "Regularización permanente, derogación del «rechazo en frontera», cierre de los CIE y cita en extranjería en siete días.",
   "clave": [
    "Terminar la regularización extraordinaria de 2026 y crear un procedimiento de regularización estable y permanente.",
    "Derogar el «rechazo en frontera» y cerrar los Centros de Internamiento de Extranjeros (CIE).",
    "Cita en las oficinas de extranjería en un máximo de siete días.",
    "Ley Integral Antirracismo."
   ],
   "mas": [
    "Permitir pedir asilo en embajadas y consulados y eximir del visado de tránsito aeroportuario a personas de países en conflicto como Palestina, Siria o Sudán.",
    "Eliminar la lista nacional de países seguros y rechazar los centros de retorno en terceros países previstos en el Reglamento europeo de Retorno.",
    "Agencia de Asilo unificada dependiente de Presidencia, con registro de solicitudes en 5 días y formalización en 21; si se superan, documento de solicitante automático.",
    "Resolver las solicitudes de reagrupación familiar en un máximo de tres meses, con silencio administrativo positivo si no hay respuesta.",
    "Ampliar el derecho de sufragio activo y pasivo de las personas migrantes residentes en las elecciones municipales.",
    "Devolver la nacionalidad española a los saharauis nacidos bajo administración española antes de septiembre de 1977 y a sus descendientes en primer grado.",
    "Aumentar un 30 % los recursos de las Oficinas de Extranjería y garantizar empadronamiento flexible, cuenta bancaria básica y homologación ágil de títulos.",
    "Prohibir los controles de identidad por perfil racial y las paradas de identificación policial con fines de aplicar la Ley de Extranjería.",
    "Mecanismo independiente de control de derechos humanos en la Frontera Sur y recursos al Defensor del Pueblo para supervisar el triaje del Pacto Europeo de Migración y Asilo.",
    "Impulsar el Estatuto del Pueblo Gitano, financiar de forma estable las asociaciones antirracistas y crear una comisión parlamentaria sobre racismo estructural."
   ]
  },
  "energia": {
   "breve": "Descarbonización con calendario de cierre nuclear, electrificación, luz gratuita en horas de excedente solar y abono único de transporte.",
   "clave": [
    "Invertir el 3,5 % del PIB al año en transición ecológica y cumplir el calendario de cierre nuclear (Almaraz en 2027-2028).",
    "Sacar la nuclear y la hidráulica del sistema marginalista de precios y recuperar la «excepción ibérica».",
    "Tres horas de luz gratis al día para los hogares en las horas de excedente solar; placas solares obligatorias en las comunidades de vecinos antes de 2030.",
    "Abono único estatal (20 € al mes para Cercanías, entre otros) y prohibir vuelos domésticos con alternativa en tren de menos de 2,5 horas."
   ],
   "mas": [
    "Titularidad pública de las redes de distribución eléctrica y de gas, gestión pública de los saltos de agua cuyas concesiones expiren y comercializadora pública de referencia.",
    "Reducir las emisiones un 38 % en 2035 y un 85 % en 2040 respecto a 1990, con un 81 % de generación renovable en 2030 y el 100 % en 2040.",
    "Fondo Generacional de la Energía con participación pública del 30 % en nuevas renovables y ofrecer al menos el 20 % del capital de los proyectos de más de 5 MW a vecinos y ayuntamientos.",
    "Retirar el apoyo público al H2Med y destinar sus 7.000 M€ a redes, almacenamiento y electrificación industrial; retirar los ciclos combinados antes de 2045.",
    "Eliminar las subvenciones a los combustibles fósiles, prohibir la publicidad de empresas fósiles e impedir la importación de gas obtenido por fracking.",
    "Unificar Adif y Renfe en un operador público, revertir la liberalización de la alta velocidad y al menos triplicar la inversión anual en Cercanías en cuatro años.",
    "Electrificar toda la red ferroviaria y retirar las locomotoras diésel antes de 2030, llevar el 80 % de las mercancías al tren y destinar a este los casi 13.000 M€ del plan DORA de aeropuertos.",
    "Leasing social de coches eléctricos por 100 o 150 € al mes para rentas bajas y medias, y gratuidad del transporte público en Canarias, Illes Balears, Ceuta y Melilla.",
    "Ciclo del agua con gestión 100 % pública directa, mínimo vital gratuito y prohibición de construir en zonas inundables y en los primeros 500 metros del litoral.",
    "Derogar la Ley 18/2013 que protege la tauromaquia, suprimir sus subvenciones, devolver la protección estricta al lobo y no autorizar nuevas macrogranjas."
   ]
  },
  "economia": {
   "breve": "Banca pública, entrada de la SEPI en empresas estratégicas y precios máximos para la cesta básica.",
   "clave": [
    "Banca pública a partir de Correos, el ICO y el 18 % público de CaixaBank.",
    "Entrada de la SEPI en empresas estratégicas, «acción de oro» del Estado y ayudas condicionadas a compromisos de empleo e inversión.",
    "Precios máximos para la cesta básica e impuesto sobre los márgenes excesivos en alimentación.",
    "Participación de las plantillas en los consejos de administración y reparto obligatorio de beneficios."
   ],
   "mas": [
    "Reservar a las plantillas más del 2 % del capital en empresas de 25 a 1.000 trabajadores y más del 10 % en las mayores, y crear fondos colectivos de inversión («fondos Meidner»).",
    "Facultar a la CNMC para fijar directamente precios máximos en energía, alimentación, transporte, comunicaciones y finanzas ante márgenes abusivos, y prohibir los precios personalizados por perfilado.",
    "Prohibir que el capital riesgo compre hospitales, residencias, centros de servicios sociales y centros educativos, y vetar las fusiones bancarias que aumenten el poder de mercado.",
    "Inversión en I+D+i del 3 % del PIB en 2030 y del 4 % en la década siguiente, con un Banco Público de Inversión y un fondo público de inversión tecnológica.",
    "Crear una empresa pública de materias primas estratégicas y ampliar la cartera de pedidos de Navantia, diversificándola hacia las renovables y la construcción naval de más valor.",
    "Línea ICO de 3.000 M€ anuales al euríbor + 1 % para empresas de menos de 50 trabajadores e IVA franquiciado para quienes facturen menos de 85.000 € al año.",
    "Banco público de tierras con prioridad para jóvenes y techo de superficie por comprador; excluir de la PAC a fondos de inversión y grandes sociedades y eliminar los derechos históricos.",
    "Alcanzar un 25 % de superficie agraria ecológica en 2030 y el 100 % en 2050, y poner fin a la pesca de arrastre con la desaparición progresiva de la flota industrial.",
    "Contratos de alquiler comercial de al menos 5 años con límite a las subidas anuales, y criterios sociales y ambientales de al menos el 51 % en la contratación pública.",
    "Ley de transición justa con planes por comarca al menos cinco años antes de cada cierre, y una «tasa nube» sobre los centros de datos con retorno a los municipios."
   ]
  },
  "igualdad": {
   "breve": "Permiso de nacimiento de 20 semanas por progenitor, Ley de Cuidados y desarrollo completo de la Ley Trans.",
   "clave": [
    "Permiso por nacimiento de 20 semanas por progenitor y permiso parental retribuido de hasta 10 semanas.",
    "Suspensión cautelar automática de las visitas del progenitor investigado por violencia machista.",
    "Ley de Familias, Ley de Cuidados y duplicar la ayuda a domicilio.",
    "Desarrollo completo de la Ley Trans, incluidas las identidades no binarias."
   ],
   "mas": [
    "Destinar por ley al menos el 5 % del presupuesto no financiero del Estado a igualdad y aumentar un 10 % adicional cada año la partida contra la violencia machista.",
    "Ampliar la definición legal de violencia vicaria, evaluar en VioGén el riesgo para los hijos e impedir el uso del «síndrome de alienación parental» en informes periciales.",
    "Incluir el derecho al aborto en el artículo 43 de la Constitución y reconocer en una Ley de Libertad de Conciencia el derecho a la eutanasia y al suicidio asistido.",
    "Eliminar la normativa que sanciona a las personas que ejercen la prostitución, garantizándoles derechos laborales y de Seguridad Social, y dotar con 250 M€ la atención a víctimas de trata.",
    "Listas electorales con formato cremallera como garantía mínima, permitiendo la presencia consecutiva de mujeres en puestos elegibles.",
    "Completar la transposición de la directiva de transparencia retributiva, con evaluaciones salariales conjuntas cuando la brecha supere el 5 % sin justificación.",
    "Atención sanitaria trans despatologizada, Observatorio Estatal contra la LGTBIfobia y evitar intervenciones no urgentes a personas intersexuales sin su consentimiento.",
    "Reconocer «familias escogidas»: personas designadas sin parentesco ni convivencia con derecho a permisos retribuidos por enfermedad, hospitalización, fallecimiento y cuidados.",
    "Ampliar el permiso por fallecimiento de familiar de 2 a 10 días hábiles y crear un permiso de hasta 15 días para acompañar cuidados paliativos.",
    "Ley Estatal de Juventud, modelo Barnahus en todo el Estado y regulación de las redes sociales para menores de 16 años con eliminación de funciones adictivas."
   ]
  },
  "seguridad": {
   "breve": "Derogación de la Ley de Seguridad Ciudadana de 2015, de los delitos contra los sentimientos religiosos y de ultrajes a España.",
   "clave": [
    "Derogar por completo la Ley de Seguridad Ciudadana de 2015.",
    "Derogar los delitos contra los sentimientos religiosos, contra la Corona y de ultrajes a España y sus símbolos.",
    "Recuperar plenamente la jurisdicción universal."
   ],
   "mas": [
    "Prohibir las pelotas de goma, garantizar la identificación visible de los agentes y crear un organismo independiente que investigue las denuncias de malos tratos policiales.",
    "Desmilitarizar la Guardia Civil, no aplicar el Código Penal Militar a tareas policiales y reconocer a Guardia Civil y Policía Nacional como profesión de riesgo.",
    "Reformar la LOPJ para que, sin acuerdo en dos meses, las Cámaras puedan elegir por mayoría absoluta a los vocales judiciales del CGPJ.",
    "Incompatibilidad total de jueces con cualquier actividad remunerada ajena a la carrera, incluida la preparación de opositores, y responsabilidad directa por dolo o culpa grave.",
    "Plan plurianual para alcanzar en dos legislaturas la media europea de jueces y fiscales (de menos de 12 a más de 17 por 100.000 habitantes) y acceso becado según renta.",
    "Oficina Independiente contra la Corrupción, decomiso sin condena previa, fin de la atenuante de dilaciones indebidas y veto de 20 años a contratar con el sector público.",
    "Ampliar las penas no privativas de libertad para delitos de mediana gravedad e implantar servicios públicos de justicia restaurativa en todas las fases del proceso penal.",
    "Ampliar la justicia gratuita a personas amenazadas de desahucio, víctimas de violencia sexual y vicaria y migrantes, y mejorar los baremos del turno de oficio.",
    "Ley que regule por primera vez la objeción de conciencia y marco legal sobre el uso de la fuerza policial conforme a la jurisprudencia del TEDH.",
    "Endurecer progresivamente las penas por maltrato animal según la reincidencia y eliminar su sustitución por multa."
   ]
  },
  "exterior": {
   "breve": "Rechazo del objetivo de la OTAN del 5 % del PIB, embargo de armas a Israel y referéndum en el Sáhara Occidental.",
   "clave": [
    "Rechazar el objetivo de la OTAN del 5 % del PIB en gasto militar y reducir el gasto militar.",
    "Firmar el Tratado sobre la Prohibición de las Armas Nucleares.",
    "Ley de embargo de armas integral y permanente a Israel y ley para romper relaciones con Estados responsables de genocidio o apartheid.",
    "Referéndum de autodeterminación en el Sáhara Occidental que incluya la independencia; apoyo a una paz negociada en Ucrania.",
    "Convertir los recintos de uso militar extranjero en polos civiles y tecnológicos."
   ],
   "mas": [
    "Subir la cooperación al desarrollo del 0,27 % al 0,7 % de la Renta Nacional Bruta, con el 10 % para acción humanitaria y el 30 % para derechos de mujeres y niñas.",
    "Reformar la Ley 53/2007 para embargar automáticamente armas a Estados cuyos dirigentes investigue la Corte Penal Internacional, con control parlamentario previo de las autorizaciones.",
    "Blindar por ley el compromiso del referéndum de 1986 de no instalar, almacenar ni introducir armas nucleares en territorio español.",
    "Impulsar la suspensión del Acuerdo de Asociación UE-Israel y que todos los Estados de la UE reconozcan al Estado de Palestina.",
    "Aplicar las sentencias del TJUE excluyendo al Sáhara Occidental de los acuerdos UE-Marruecos y votar en contra de los acuerdos comerciales que lo incluyan.",
    "Superar el Pacto de Estabilidad y Crecimiento, ampliar el mandato del BCE al pleno empleo y la transición ecológica y permitirle financiar directamente a los Estados.",
    "Sustituir la unanimidad por la mayoría cualificada en la política exterior de la UE cuando se trate de derechos humanos, paz o medidas humanitarias.",
    "Ratificar la convención sobre imprescriptibilidad de crímenes de guerra y de lesa humanidad, apoyar plenamente a la Corte Penal Internacional y tipificar el ecocidio.",
    "Promover un recurso ante el TJUE contra el Reglamento de Retornos de 2026 y los centros de deportación en terceros países, y fiscalizar Frontex.",
    "Reforma de la ONU que democratice el Consejo de Seguridad y creación de una agencia fiscal internacional con un impuesto global a las grandes fortunas."
   ]
  },
  "estado": {
   "breve": "República federal y plurinacional con elección de la Jefatura del Estado, nuevo modelo de financiación autonómica y voto a los 16 años.",
   "clave": [
    "República federal y plurinacional, con elección de la Jefatura del Estado y referéndum para resolver la cuestión territorial.",
    "Nuevo modelo de financiación autonómica con más capacidad fiscal de las comunidades.",
    "Voto a los 16 años e incluir en la Constitución las pensiones, la vivienda, la salud y el aborto.",
    "Ley de Libertad de Conciencia que sustituya a la Ley de Libertad Religiosa."
   ],
   "mas": [
    "Aportar al menos un 2,3 % del PIB adicional al año (unos 38.000 M€) al sistema de financiación autonómica, sin que compute en la regla de gasto.",
    "Condonar deuda autonómica a cambio de no bajar impuestos a rentas altas y fijar por ley un mínimo común de tributación en Patrimonio y Sucesiones.",
    "Elevar la participación de los ayuntamientos en los tributos del Estado hasta el 2,5 % del PIB, empezando con 6.000 M€, y permitir a los saneados invertir sus remanentes.",
    "Revisar los Acuerdos de 1979 con la Santa Sede, suprimir la financiación pública y las exenciones del IBI de las confesiones y recuperar los bienes inmatriculados por la Iglesia.",
    "Sistema electoral con proporcionalidad directa a nivel nacional, reducir de 500.000 a 250.000 las firmas de la ILP y crear una circunscripción para la ciudadanía en el exterior.",
    "Convertir el Senado en cámara de representación territorial y aprobar una ley de plurilingüismo para relacionarse con el Estado en las lenguas cooficiales.",
    "Desarrollar la Ley de Memoria Democrática con la reparación como derecho subjetivo, cerrar las fundaciones franquistas y resignificar Cuelgamuros como espacio de memoria.",
    "Reparar las vulneraciones de derechos entre 1978 y 1983, aprobar una Ley sobre Bebés Robados y reformar la Ley de Secretos Oficiales para garantizar el acceso a archivos.",
    "Ley de Integridad Pública con registro de titulares reales de las sociedades, ley de grupos de interés y estatuto de incompatibilidades para expresidentes del Gobierno.",
    "Límites a la concentración de medios, registro público de su propiedad y publicidad institucional, y multas de hasta el 6 % de la facturación mundial a grandes plataformas."
   ]
  }
 }
},
{
 "id": "bildu",
 "name": "EH Bildu",
 "nombre": "Euskal Herria Bildu",
 "ambito": "País Vasco y Navarra",
 "doc": "Garantía y derechos",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "30 páginas",
 "idioma": "Castellano",
 "estructura": [
  "Derechos y libertades",
  "Reconocimiento de Euskal Herria como nación y autogobierno",
  "Paz y convivencia"
 ],
 "resumen": "El programa pone el foco en derechos sociales y laborales: intervención en el mercado de la vivienda, jornada de 32 horas, subida de pensiones mínimas y control de precios y márgenes en energía y alimentación. Su segundo eje es el reconocimiento de Euskal Herria como nación con derecho a decidir y la transferencia de nuevas competencias; el tercero, memoria, paz, rechazo a la OTAN y reforma de la Ley de Seguridad Ciudadana de 2015.",
 "esencial": [
  "Intervención en el mercado de la vivienda, con alquileres limitados y prohibición de desahucios vulnerables",
  "Jornada reducida sin pérdida salarial y pensiones mínimas ligadas al salario mínimo",
  "Control de precios y márgenes en energía y alimentación",
  "Reconocimiento de Euskal Herria como nación y derecho a decidir del pueblo vasco",
  "Transferencia de nuevas competencias, como migración, Seguridad Social y puertos",
  "Rechazo a la OTAN, memoria y paz, y reforma de la Ley de Seguridad Ciudadana"
 ],
 "pdf": "pdf/bildu.pdf",
 "pdfMB": "0,6 MB",
 "ejes": {
  "E1": {
   "p": -1,
   "e": "Impuesto permanente a las energéticas, más peso del impuesto a la banca y las grandes fortunas y nuevo impuesto a las grandes distribuidoras alimentarias (p. 14)."
  },
  "E2": {
   "p": -1,
   "e": "Tope del 2 % a la actualización de rentas, prohibición de desahucios de vulnerables y de la compra especulativa por fondos y grandes tenedores; eliminar las SOCIMI (p. 5-6)."
  },
  "E3": {
   "p": -1.5,
   "e": "Jornada de 32 horas sin reducción salarial, despido improcedente de 45 días, salarios de tramitación y autorización previa de los ERE (p. 6)."
  },
  "E4": {
   "p": -1,
   "e": "Reforzar la participación pública en sectores estratégicos y crear una farmacia pública, sin proponer nacionalizaciones (pp. 11, 16)."
  },
  "E5": {
   "p": -1.5,
   "e": "Derogar la Ley 15/1997 que permite la gestión privada sanitaria y limitar la privatización y el ánimo de lucro en los cuidados (p. 11-12)."
  },
  "E6": {
   "p": -1.5,
   "e": "Derogar la reforma del artículo 135 de la Constitución y las reglas fiscales; rechazo a las políticas de austeridad (p. 14)."
  },
  "E7": {
   "p": -1.5,
   "e": "Límites temporales a precios de bienes esenciales, tope al gas y controles obligatorios de márgenes de energéticas y distribuidoras (p. 8-9)."
  },
  "E8": {
   "p": -1,
   "e": "Blindar la revalorización con el IPC, rechazar subir la edad de jubilación y jubilación sin penalización con 40 años cotizados (p. 7-8)."
  },
  "S1": {
   "p": -1.5,
   "e": "Regularización estable, nueva Ley de Extranjería, rechazo a los CIE y acceso a servicios con independencia de la situación administrativa (p. 20)."
  },
  "S2": {
   "p": -1,
   "e": "Blindar el aborto con perímetros de protección y ampliar la eutanasia al sufrimiento psíquico (p. 10 y 19)."
  },
  "S3": {
   "p": -1,
   "e": "Prohibir las terapias de conversión y no aceptar retrocesos en la despatologización trans (p. 19)."
  },
  "S4": {
   "p": -1,
   "e": "Reformar la «Ley Mordaza» (sin pelotas de goma, desobediencia como falta leve) y repliegue de las Fuerzas y Cuerpos de Seguridad del Estado (p. 22 y 27)."
  },
  "S5": {
   "p": -1.5,
   "e": "Despenalizar las injurias a la Corona y a las instituciones, la ofensa a los sentimientos religiosos y el enaltecimiento del terrorismo (p. 22)."
  },
  "S6": {
   "p": -1.5,
   "e": "Penalizar la violencia vicaria, prevenir la violencia sexual digital y blindar los derechos logrados (p. 19)."
  },
  "S7": {
   "p": -0.5,
   "e": "Sistema educativo «laiko» y despenalizar la ofensa a los sentimientos religiosos; no menciona los acuerdos con la Santa Sede (p. 11 y 22)."
  },
  "S8": {
   "p": -1,
   "e": "Ampliar la Ley de Memoria Democrática a víctimas de tortura y de la «guerra sucia» y derogar la Ley de Secretos Oficiales (p. 27)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Prórroga automática de alquileres con subida anual limitada, prohibición de compras especulativas y fin de las SOCIMI.",
   "clave": [
    "Contratos de alquiler con prórroga automática y subida anual de la renta limitada al 2 % cuando el IPC supere esa cifra.",
    "Prohibir de forma permanente los desahucios de personas y familias vulnerables sin alternativa habitacional, con compensación financiada por el Estado.",
    "Prohibir la compra especulativa de vivienda por fondos de inversión, empresas con ánimo de lucro y grandes tenedores; exigir a los extranjeros con varias viviendas dos años de empadronamiento antes de comprar otra.",
    "IVA del 21 % para los alojamientos turísticos de corta duración, prohibir que las plataformas anuncien pisos turísticos ilegales y eliminar las SOCIMI."
   ],
   "mas": [
    "Mecanismo especial de financiación estatal para los ayuntamientos que declaren zonas tensionadas, destinado a sus planes locales de vivienda y a la regulación del alquiler.",
    "Condicionar la compra de edificios completos a que se destinen a alquiler regulado según los índices de precios, prohibiendo su compra con finalidad turística o especulativa.",
    "Eliminar cualquier deducción fiscal al arrendador cuando la renta suba respecto al contrato anterior o al índice de precios de referencia.",
    "Exigir que la vivienda comprada por extranjeros con varias propiedades se destine a residencia habitual del propietario o a alquiler regulado bajo los índices de referencia.",
    "Subvenciones a la rehabilitación energética profunda de viviendas, progresivas según renta y de hasta el 100 % para los hogares más vulnerables, con mecanismos de financiación anticipada.",
    "Condicionar las subvenciones públicas a la rehabilitación a que se mantenga a las personas inquilinas y se limite el precio del alquiler, para evitar subidas o desahucios indirectos."
   ]
  },
  "empleo": {
   "breve": "Jornada de 32 horas sin reducción salarial, salario mínimo autonómico y registro horario digital obligatorio.",
   "clave": [
    "Jornada de 32 horas semanales o de cuatro días sin reducción salarial; en las pymes, primero 35 horas y un máximo de tres años para llegar a 32.",
    "Que las comunidades autónomas puedan fijar un salario mínimo propio por encima del estatal, con la Carta Social Europea como referencia de cuantía.",
    "Indemnización por despido improcedente de al menos 45 días, salarios de tramitación y autorización previa de la autoridad laboral en los ERE.",
    "Registro horario digital obligatorio para controlar las horas extra; Marco Vasco y Navarro de Relaciones Laborales y transferencia de la Inspección de Trabajo."
   ],
   "mas": [
    "Impedir que las empresas absorban las subidas del salario mínimo mediante pluses y complementos salariales.",
    "Fijar por ley el recargo de las horas extraordinarias, muchas hoy no remuneradas, junto al registro horario digital accesible a la Inspección de Trabajo.",
    "Limitar el periodo de prueba, a falta de convenio, a 3 meses para personal técnico titulado y 1 mes para el resto, para evitar despidos encubiertos.",
    "Equiparación laboral plena de las empleadas de hogar: revisión del régimen de internas y de las enfermedades profesionales, más inspección en domicilios y un convenio colectivo propio.",
    "Cumplimiento efectivo de la cuota de reserva de empleo para personas con discapacidad, con puestos accesibles, apoyos, adaptaciones y estabilidad.",
    "Más recursos y plantilla en la administración laboral para tramitar prestaciones y desempleo en plazo, presencial y electrónicamente, y procesos abreviados para su reconocimiento.",
    "Convocar plazas para ampliar la Inspección de Trabajo mientras no se transfiera, y transferir a Navarra las políticas pasivas de empleo.",
    "Agilizar los trámites de homologación y equivalencia de titulaciones extranjeras, que el programa considera necesarios en los procesos de inclusión sociolaboral.",
    "Promover la reducción de jornada sin reducción salarial aprovechando los beneficios de la inteligencia artificial, con formación y reciclaje profesional.",
    "Reconocer a las administraciones vascas y navarras la competencia para fijar en negociación colectiva las subidas salariales de su personal sin los límites estatales."
   ]
  },
  "impuestos": {
   "breve": "Impuesto a las energéticas y a la banca, nuevo gravamen a grandes distribuidoras de alimentación y tasa a vuelos privados.",
   "clave": [
    "Recuperar y hacer permanente el impuesto a las energéticas, gestionado por las haciendas forales, y aumentar el de la banca y las grandes fortunas.",
    "Nuevo impuesto especial sobre los beneficios de las grandes distribuidoras de alimentación.",
    "Gravamen a los vuelos privados, tasa finalista sobre los billetes de avión y fin de las subvenciones a los combustibles fósiles, incluida la exención al queroseno de aviación.",
    "Derogar la reforma del artículo 135 de la Constitución y las reglas fiscales que limitan la inversión de las entidades locales."
   ],
   "mas": [
    "Mecanismo permanente que grave los beneficios extraordinarios de las grandes energéticas, tanto por precios altos de la electricidad como por márgenes en el sector fósil.",
    "Concertar con las haciendas forales la gestión y recaudación de los impuestos a las energéticas y a las grandes distribuidoras alimentarias.",
    "Revisar la fiscalidad energética para dejar de penalizar la electricidad frente a los combustibles fósiles y equiparar el impuesto especial de hidrocarburos.",
    "Aplicar el IVA superreducido a los productos de higiene menstrual en todos los puntos de venta.",
    "Someter cualquier nueva figura fiscal ambiental estatal a concertación previa con el Concierto Económico vasco y el Convenio Económico navarro.",
    "Rechazar cualquier retorno a políticas de austeridad que impliquen privatizaciones o recortes en servicios públicos, derechos laborales o pensiones."
   ]
  },
  "pensiones": {
   "breve": "Pensión mínima de al menos 1.220 euros, revalorización con el IPC y jubilación sin penalización con 40 años cotizados.",
   "clave": [
    "Pensión mínima de al menos 1.220 €, ligada al salario mínimo; subir al menos un 15 % las de viudedad y las no contributivas.",
    "Mantener la revalorización con el IPC y rechazar cualquier aumento de la edad de jubilación o del periodo de cálculo.",
    "Jubilación sin penalización con al menos 40 años cotizados.",
    "Hacer permanente la prohibición de cortar los suministros básicos a hogares vulnerables y automatizar el acceso a los bonos sociales eléctrico y térmico.",
    "Transferir la Seguridad Social y el Ingreso Mínimo Vital a las instituciones vascas y navarras; mientras tanto, subir las cuantías del IMV y ampliar quién puede cobrarlo."
   ],
   "mas": [
    "Blindar el carácter público del sistema de pensiones y rechazar cualquier intento de recorte o privatización en todas sus modalidades.",
    "Mantener y ampliar el acceso y la duración del Suministro Mínimo Vital de electricidad para los hogares vulnerables.",
    "Actualizar el IPREM con el IPC y aplicar un aumento extraordinario que compense la pérdida de cuantía de las prestaciones y ayudas ligadas a este índice.",
    "Ampliar los criterios de vulnerabilidad (límite de renta, cargas familiares, condiciones especiales) para que más hogares accedan a las medidas de protección.",
    "Pagar las prestaciones de dependencia con efecto retroactivo desde la fecha de solicitud, como primer paso hacia un derecho subjetivo a los cuidados.",
    "Eliminar el copago de los cuidados personales en la ley de dependencia, de modo que las familias solo paguen alojamiento y manutención.",
    "Limitar la privatización y el ánimo de lucro en los cuidados, avanzando hacia su universalidad y gratuidad.",
    "Reconocer los cuidados familiares en la Seguridad Social mediante bonificaciones, cómputo para pensiones y permisos retribuidos.",
    "Reparar a colectivos como las personas afectadas por la poliomielitis o la talidomida y quienes sufrieron esterilizaciones forzadas."
   ]
  },
  "sanidad": {
   "breve": "Salud bucodental y visual pública para colectivos vulnerables, derogación de la gestión privada de servicios y eutanasia por sufrimiento físico o psíquico.",
   "clave": [
    "Incluir en la sanidad pública la salud bucodental y la visual para colectivos vulnerables; productos menstruales, preservativos y pruebas básicas de ITS gratuitos en farmacias.",
    "Derogar la Ley 15/1997, que permite la gestión privada de servicios sanitarios, y avanzar con las comunidades autónomas hacia una farmacia pública.",
    "Reformar la ley de eutanasia para que cubra por igual el sufrimiento físico y el psíquico.",
    "Hasta que se transfiera la formación especializada, reservar el 53 % de las plazas MIR, EIR y PIR a profesionales que dominen las dos lenguas oficiales del País Vasco.",
    "Restringir la venta y la publicidad de ultraprocesados y bebidas azucaradas y energéticas dirigidas a menores."
   ],
   "mas": [
    "Modificar la Ley 44/2003 para reconocer como profesiones sanitarias la biología, el trabajo social, las ciencias de la actividad física y del deporte y la psicología.",
    "Cambiar el modelo de acceso a la formación MIR, EIR y PIR y crear la especialidad de enfermedades infecciosas.",
    "Priorizar y prestigiar la especialidad de medicina familiar y comunitaria para reforzar la atención primaria.",
    "Transferir a las instituciones vascas la formación sanitaria especializada y sus áreas de capacitación, la Sanidad Exterior y los centros de vacunación internacional.",
    "Nueva Estrategia de Salud Mental del Sistema Nacional de Salud centrada en los determinantes sociales y en la capacidad de decisión de las personas afectadas.",
    "Regular la financiación y el patrocinio de la industria farmacéutica y de tecnologías médicas para orientarlos a los objetivos del sistema público.",
    "Reformar el Real Decreto Legislativo 1/2015 (ley del medicamento) para mejorar el acceso a la innovación y el abastecimiento de fármacos.",
    "Detección y prevención de la violencia obstétrica y seguimiento del cumplimiento del derecho al olvido oncológico."
   ]
  },
  "educacion": {
   "breve": "Ratios más bajas, inversión educativa cercana al 6 %, estabilidad del profesorado y sistema educativo propio para Euskal Herria.",
   "clave": [
    "Bajar las ratios de alumnos por aula.",
    "Acercar la inversión en educación al 6 % que recomienda la UNESCO.",
    "Estabilizar al profesorado y mejorar sus condiciones laborales.",
    "Sistema educativo propio para Euskal Herria y más atención al alumnado con necesidades educativas especiales."
   ],
   "mas": [
    "Formación educativa y social en competencias digitales e inteligencia artificial para toda la ciudadanía, tomando como referencia el marco europeo de competencias digitales.",
    "Reforzar las campañas de prevención de las ITS y el VIH, sobre todo en el ámbito educativo y de ocio."
   ]
  },
  "inmigracion": {
   "breve": "Regularización efectiva y estable, rechazo al Pacto Europeo de Migración y Asilo y acceso a servicios sin importar la situación administrativa.",
   "clave": [
    "Regularización efectiva y estable, y nueva Ley de Extranjería basada en los derechos humanos.",
    "Rechazar las disposiciones restrictivas del Pacto Europeo de Migración y Asilo, las devoluciones sumarias, la externalización de fronteras y los CIE.",
    "Acceso al padrón, la sanidad, la educación, la vivienda y la protección social con independencia de la situación administrativa; ampliar el derecho de voto de los extranjeros residentes.",
    "Transferir las competencias migratorias para crear un modelo vasco de acogida."
   ],
   "mas": [
    "Facilitar las autorizaciones de residencia y trabajo y prevenir la irregularidad sobrevenida, como parte de una regularización accesible y estable.",
    "Sistema público de acogida integral con acompañamiento social, jurídico y laboral y homologación de títulos.",
    "Reforzar la prevención, denuncia y sanción del racismo institucional, laboral, inmobiliario y policial, con mecanismos independientes de supervisión y reparación.",
    "Modificar la Ley de Extranjería para garantizar el acceso y la evaluación de las solicitudes de protección internacional conforme al derecho internacional.",
    "Dotar de personal suficiente a las oficinas de extranjería de Navarra y del País Vasco, también para reagrupaciones familiares."
   ]
  },
  "energia": {
   "breve": "Descarbonización al menos en 2045, electrificación prioritaria, tope al gas y transferencia de ferrocarriles, puertos y aeropuertos.",
   "clave": [
    "Adelantar la descarbonización al menos a 2045 y mantener el calendario de cierre nuclear del PNIEC.",
    "Electrificación como vía prioritaria, con objetivos vinculantes, y reforma del mercado eléctrico europeo para superar el sistema marginalista.",
    "Recuperar el tope al gas y fijar límites temporales a los precios de la electricidad, el gas y los combustibles en situaciones de emergencia.",
    "Transferir ferrocarriles, puertos y aeropuertos; renovar las vías del corredor navarro y la conexión con Burgos como alternativa a la alta velocidad, y pasar mercancías de la carretera al tren.",
    "Ayudas al coche eléctrico según renta y leasing social para hogares vulnerables, sin subvenciones a los híbridos."
   ],
   "mas": [
    "Despliegue rápido de renovables con participación pública y comunitaria, compatible con la soberanía alimentaria y con retorno económico para los territorios que las acogen.",
    "Reforzar las redes eléctricas, el almacenamiento y la flexibilidad del sistema, y facilitar normativa y fiscalmente el autoconsumo y las comunidades energéticas.",
    "Ayudas para sustituir calderas de combustibles fósiles por bombas de calor con mejoras de aislamiento, y para refrigeración en edificios públicos y hogares vulnerables.",
    "Adaptación al cambio climático con un enfoque desde abajo, tomando la comarca como unidad de planificación territorial, hídrica, forestal y de movilidad.",
    "Reforzar Cercanías y Media Distancia, con más frecuencias y conexiones con Iparralde (País Vasco francés).",
    "Mantener y ampliar las rebajas de tarifas y bonos de viajero frecuente, con financiación estatal también para el transporte autonómico, foral y local.",
    "Que las instituciones vascas gestionen las aportaciones estatales a la bonificación del transporte y que los servicios estatales se integren en sus sistemas tarifarios.",
    "Condicionar el despliegue de centros de datos a criterios de sostenibilidad energética, hídrica y territorial y a su contribución al desarrollo económico local."
   ]
  },
  "economia": {
   "breve": "En emergencias, obligar a grandes energéticas y distribuidoras a absorber subidas de costes con sus márgenes.",
   "clave": [
    "En emergencias, obligar a las grandes empresas energéticas y de alimentación a absorber con sus márgenes parte de las subidas de costes.",
    "Controles obligatorios de precios y márgenes de las grandes distribuidoras e intermediarios de alimentación, y medidas contra la reduflación.",
    "Más capacidad de decisión para Euskal Herria sobre la Política Agraria Común y la Política Pesquera Común; compra pública de alimentos de proximidad.",
    "Impulsar la economía social y las cooperativas industriales; condicionar las ayudas públicas a la industria a la descarbonización, el empleo y el valor añadido."
   ],
   "mas": [
    "Ayudas y rebajas de precio a la industria, el transporte profesional y el sector primario afectados por los costes energéticos, condicionadas a mantener actividad y empleo.",
    "Reforzar la CNMC y el Observatorio de Márgenes Empresariales y hacer cumplir la prohibición de comprar alimentos por debajo del coste de producción.",
    "Estrategia «Made in Europe» que condicione las ayudas y la contratación pública a la descarbonización y refuerce la participación pública en sectores estratégicos.",
    "Estrategia de soberanía digital con infraestructuras públicas de computación y nube, prioridad al software libre y participación vasca en la red europea EuroHPC.",
    "Recuperar empresas en crisis mediante fórmulas de propiedad colectiva y fomentar la participación de los trabajadores en la propiedad y gestión de las empresas.",
    "Impulsar la Seguridad Social Alimentaria y el derecho a la alimentación con precios justos en origen.",
    "Ampliar la superficie de agricultura y ganadería ecológica y crear el sello «ECOREGENERATIVA» para explotaciones con prácticas regenerativas del suelo.",
    "Transparencia y auditoría de las decisiones automatizadas tomando como referencia el Reglamento europeo de IA, y desactivar por defecto la recomendación algorítmica a menores."
   ]
  },
  "igualdad": {
   "breve": "Blindaje del aborto, prohibición de las terapias de conversión, permisos de maternidad universales y penalización de la violencia vicaria.",
   "clave": [
    "Blindar el derecho al aborto, con perímetros de protección alrededor de las clínicas.",
    "Reconocer y penalizar la violencia vicaria y prevenir las violencias sexuales en el ámbito digital.",
    "Prohibir las terapias de conversión y reforzar la investigación de los delitos de odio contra personas LGTBIQ+.",
    "Permisos de maternidad preparto y puerperal universales y retribuidos; equiparar los permisos de las familias monoparentales con los de las biparentales."
   ],
   "mas": [
    "Revisar los recursos y sistemas de protección y reparación de las mujeres víctimas de violencia machista y combatir los discursos que la niegan.",
    "No aceptar retrocesos en la despatologización de las personas trans y desarrollar el artículo 50 de la Ley 4/2023 sobre documentos de personas trans extranjeras.",
    "Cumplir íntegramente la Directiva (UE) 2019/1158 de conciliación y equiparar el permiso de lactancia de asalariados y autónomos.",
    "Orientar a las comunidades autónomas a crear prestaciones de crianza según el coste territorial, compatibles con el Ingreso Mínimo Vital.",
    "Mejorar las prestaciones por cuidado de menores afectados por cáncer u otras enfermedades graves, dentro del reconocimiento de los permisos como derecho de la infancia.",
    "Reservar porcentajes mínimos de ayudas audiovisuales para proyectos liderados por mujeres o jóvenes y elevar las reservas para películas dirigidas por mujeres."
   ]
  },
  "seguridad": {
   "breve": "Reforma de la Ley de Seguridad Ciudadana, eliminación de delitos de injurias a la Corona y repliegue de fuerzas estatales.",
   "clave": [
    "Reformar la Ley de Seguridad Ciudadana de 2015: sustituir las pelotas de goma y rebajar la desobediencia de falta grave a leve.",
    "Eliminar del Código Penal los delitos de injurias a la Corona y a las instituciones, de ofensa a los sentimientos religiosos y de enaltecimiento del terrorismo.",
    "Ampliar la Ley de Memoria Democrática a víctimas de tortura, de la «guerra sucia» y de grupos de ultraderecha, y derogar la Ley de Secretos Oficiales.",
    "Aplicar la legislación penitenciaria ordinaria a todos los presos, sin medidas de excepción.",
    "Repliegue de las Fuerzas y Cuerpos de Seguridad del Estado del País Vasco y Navarra, y retirar condecoraciones a agentes implicados en vulneraciones de derechos humanos."
   ],
   "mas": [
    "Anular las sanciones de la Ley de Seguridad Ciudadana basadas en interpretaciones policiales subjetivas y cancelarlas si la persona denunciada se retracta.",
    "Delimitar el concepto de «discurso de odio» para que proteja a colectivos discriminados y no se use para perseguir la disidencia política.",
    "Reformar la Ley de Publicidad y Comunicación Institucional para no financiar desinformación y repartir la publicidad pública de forma transparente, incluyendo medios en euskera, catalán y gallego.",
    "Esclarecer casos como las muertes de Mikel Zabalza y Germán Rodríguez o los sucesos del 3 de marzo de 1976 en Vitoria-Gasteiz, mediante la derogación de la Ley de Secretos Oficiales."
   ]
  },
  "exterior": {
   "breve": "Rechazo a la OTAN y al gasto en defensa, ruptura del acuerdo UE-Israel y embargo total de armas a Israel.",
   "clave": [
    "Rechazar la OTAN y la pertenencia de Euskal Herria a ella, el aumento del gasto en defensa y el envío de armas.",
    "Cerrar el campo de tiro de las Bardenas e impedir el uso de las bases estadounidenses en Europa, incluidas Rota y Morón.",
    "Adherirse al Tratado sobre la Prohibición de las Armas Nucleares.",
    "Romper el acuerdo de la UE con Israel, cortar las relaciones comerciales con empresas israelíes y embargo total de armas.",
    "Volver a apoyar la autodeterminación del Sáhara Occidental y pedir el fin del bloqueo de Estados Unidos a Cuba."
   ],
   "mas": [
    "Proyecto de seguridad europeo no dependiente de Estados Unidos, basado en la «seguridad indivisible» y en revisar los Acuerdos de Helsinki y el papel de la OSCE.",
    "Promover la salida de los más de 100.000 soldados estadounidenses en activo en Europa y terminar con la dependencia de la OTAN y de Estados Unidos.",
    "Planes de reconversión y financiación para los municipios del entorno de las Bardenas tras el cierre del campo de tiro.",
    "Dotar al reconocimiento del Estado palestino de políticas específicas y efectividad material, más allá del reconocimiento diplomático.",
    "Iniciativas legislativas para ampliar los derechos de las personas saharauis y reactivar el intergrupo parlamentario por Cuba.",
    "Defender el derecho internacional y el multilateralismo, y respaldar los procesos de paz y diálogo frente a las intervenciones militares."
   ]
  },
  "estado": {
   "breve": "Reconocimiento de Euskal Herria como nación, Estado plurinacional, derecho a decidir y nuevo modelo para el Cupo vasco.",
   "clave": [
    "Reconocer a Euskal Herria como nación, el carácter plurinacional del Estado y el derecho a decidir del pueblo vasco.",
    "Transferir todas las competencias pendientes del Estatuto y del Amejoramiento y asumir otras nuevas: migración, Seguridad Social, desempleo, puertos y aeropuertos, energía y relaciones laborales.",
    "Nuevo modelo de negociación y cálculo del Cupo vasco y la Aportación navarra.",
    "Exigir conocimiento de euskera en la Administración del Estado en Araba, Bizkaia, Gipuzkoa y Nafarroa, y oficialidad del euskera, el catalán y el gallego en la UE.",
    "Cambiar la ley para que las selecciones deportivas vascas puedan competir internacionalmente."
   ],
   "mas": [
    "Reconocer el carácter político del conflicto entre Euskal Herria y el Estado y comprometerse a una solución política y democrática.",
    "Respetar las decisiones de las instituciones vascas y los nuevos estatus de relación con el Estado que sean refrendados por la sociedad vasca.",
    "Revisar caso por caso las normas estatales para evitar invasiones competenciales y transferir a las instituciones vascas cualquier nueva figura que afecte a sus competencias.",
    "Ampliar las capacidades del Concierto Económico vasco y del Convenio Económico navarro como pilares del autogobierno económico, fiscal y financiero.",
    "Garantizar canales presenciales obligatorios en la Administración para cualquier trámite y controlar el fraude en la reventa de citas.",
    "Objetivos de producción y consumo de contenidos en euskera en las plataformas digitales, y apoyo al reconocimiento del catalán, gallego, asturiano y aragonés.",
    "Blindar por ley las ayudas a producciones en lenguas distintas del castellano, con al menos el 15 % del Fondo de Protección de la Cinematografía.",
    "Delimitar la figura de «productor independiente» para que grandes grupos y plataformas no absorban las ayudas destinadas a pequeñas y medianas productoras.",
    "Financiación estatal para tecnologías lingüísticas, modelos de lenguaje y traducción automática en euskera, e incorporación igualitaria de las lenguas cooficiales a la IA.",
    "Eliminar el régimen sancionador aplicado a deportistas que no deseen participar en las selecciones españolas."
   ]
  }
 }
},
{
 "id": "podemos",
 "name": "Podemos",
 "nombre": "Podemos",
 "ambito": "Estatal",
 "doc": "Así de básico: paz, casa y trabajo",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "141 páginas, unas 440 medidas numeradas",
 "idioma": "Castellano",
 "estructura": [
  "Las casas son para vivir",
  "Los precios tienen que bajar",
  "Paz. Parar las guerras",
  "Trabajar menos para vivir mejor",
  "Vida solo hay una. Planeta solo hay uno",
  "España, república plurinacional"
 ],
 "resumen": "El programa parte de la idea de que la riqueza «sube de abajo arriba» y propone revertirlo con una fuerte intervención pública en vivienda, precios, energía y servicios públicos. Sus ejes son la rebaja legal del 40 % de los alquileres, nuevos impuestos a grandes fortunas y empresas, la jornada de 30 horas, la salida de la OTAN y un proceso constituyente hacia una república plurinacional.",
 "esencial": [
  "Rebaja legal de los alquileres y prohibición de comprar viviendas que no sean de uso propio",
  "Impuestos a grandes fortunas, empresas con beneficios extraordinarios y banca",
  "Salario mínimo de 1.800 euros y jornada reducida sin bajada de salarios",
  "Revertir la privatización de la sanidad y la educación públicas",
  "Salida de la OTAN y cierre de las bases de Rota y Morón",
  "Proceso constituyente y referéndum entre monarquía y república, con reconocimiento de la plurinacionalidad"
 ],
 "pdf": "pdf/podemos.pdf",
 "pdfMB": "1,8 MB",
 "ejes": {
  "E1": {
   "p": -1.5,
   "e": "Impuesto estatal permanente a grandes fortunas, tipo mínimo de Sociedades del 19 % (29 % en oligopolios), subida del IRPF desde 60.000 € y gravamen para que la banca aporte la mitad de sus beneficios (pp. 17, 21)."
  },
  "E2": {
   "p": -1.5,
   "e": "Rebaja por ley del 40 % de los alquileres, expropiación de uso de viviendas de grandes tenedores y prohibición de comprar viviendas que no sean para residir (p. 8)."
  },
  "E3": {
   "p": -1.5,
   "e": "Jornada de 30 horas sin reducir salario, SMI de 1.800 €, despido ilegal a 45 días y supresión de los despidos objetivos (pp. 41-42)."
  },
  "E4": {
   "p": -1.5,
   "e": "Compra pública de la mayoría de Repsol, Empresa Pública de Energía, banca pública, Red Eléctrica 100 % pública y renacionalización del ferrocarril (pp. 17-18, 98, 105)."
  },
  "E5": {
   "p": -1.5,
   "e": "Red educativa única de gestión pública directa, desprivatización de sanidad y residencias y fin de nuevos conciertos (pp. 63, 79, 88)."
  },
  "E6": {
   "p": -1.5,
   "e": "Derogar la reforma del artículo 135 de la Constitución y fuertes aumentos de gasto: sanidad hasta 2.900 € por habitante, educación al 7 % del PIB (pp. 23, 80, 89)."
  },
  "E7": {
   "p": -1.5,
   "e": "Topes a los márgenes de las grandes distribuidoras, tope al gas de 40 €/MWh y límite del 5 % a la subida de tarifas de luz y gas (p. 18)."
  },
  "E8": {
   "p": -1.5,
   "e": "Jubilación ordinaria a los 63 años, pensión mínima igual al SMI y supresión de las desgravaciones a planes privados de pensiones (pp. 21, 41, 44)."
  },
  "S1": {
   "p": -1.5,
   "e": "Derogar la Ley de Extranjería, cerrar los CIE, regularización permanente por arraigo, ius soli y voto para quien vive y trabaja en España (pp. 65-67)."
  },
  "S2": {
   "p": -1.5,
   "e": "Aborto como derecho fundamental en el artículo 15 de la Constitución y refuerzo del acceso efectivo a la eutanasia (pp. 51, 94)."
  },
  "S3": {
   "p": -1.5,
   "e": "Género no binario en documentos oficiales, cupo laboral trans y libre determinación de género para menores de 14 años (p. 52)."
  },
  "S4": {
   "p": -1.5,
   "e": "Derogar la «Ley Mordaza», prohibir las pelotas de goma y la infiltración policial en movimientos sociales y suprimir la Audiencia Nacional (pp. 131-133)."
  },
  "S5": {
   "p": -0.5,
   "e": "Revisar los artículos del Código Penal que restrinjan la crítica política y la protesta (p. 133); a la vez propone sancionar la difusión de información falsa y los discursos de odio en redes (pp. 51, 139)."
  },
  "S6": {
   "p": -1.5,
   "e": "Fondo de 1.000 M€ contra la violencia machista y ampliación de su definición legal más allá de la pareja (pp. 51, 56)."
  },
  "S7": {
   "p": -1.5,
   "e": "Denunciar el Concordato y los acuerdos con la Santa Sede, suprimir la asignatura de religión y la exención del IBI a la Iglesia (pp. 22, 83, 134)."
  },
  "S8": {
   "p": -1.5,
   "e": "Cumplimiento y ampliación de la Ley de Memoria Democrática y reforma de la Ley de Amnistía de 1977 (pp. 135, 137)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Rebaja del 40 % de los alquileres, expropiación de uso a grandes tenedores y prohibición de pisos turísticos durante la emergencia.",
   "clave": [
    "Rebajar por ley un 40 % los alquileres vigentes y nuevos, sin bajar del 60 % del precio medio de la zona; contratos indefinidos por defecto.",
    "Prohibir la compra de viviendas que no sean para residencia habitual propia o familiar, o segunda residencia de uso propio.",
    "Expropiación de uso de las viviendas de grandes tenedores a partir de la undécima (calcula unas 626.000) para el parque público.",
    "Prohibir los pisos turísticos mientras dure la «emergencia habitacional» e ilegalizar las empresas de desalojo extrajudicial.",
    "Prohibir los desahucios de personas vulnerables sin alternativa; crear una inmobiliaria pública con renta máxima del 30 % de la renta media municipal."
   ],
   "mas": [
    "Incorporar al parque público todas las viviendas vacías y en construcción de la SAREB, así como su suelo edificable, para destinarlos al alquiler social.",
    "Reservar al menos el 50 % de las nuevas viviendas de los planes urbanísticos al alquiler social y ejercer el derecho público de tanteo y retracto en las ventas.",
    "Prohibir la venta y la subasta de vivienda pública y mantener de forma permanente la calificación de toda vivienda protegida para impedir su venta a precio libre.",
    "Incluir de inmediato los alquileres de temporada y por habitaciones en la Ley de Arrendamientos Urbanos para que no se usen para eludir los límites de precio.",
    "Plan de rehabilitación energética a gran escala que permita reducir hasta un 50 % el consumo de los hogares, con un ahorro medio estimado de 400 € al año.",
    "Registro público, digital y único de todas las viviendas y de su uso; no se podrá alquilar ninguna vivienda que no esté inscrita en él.",
    "Fondo de Responsabilidad Social dotado por la banca con el 0,15 % del crédito durante 30 años, dación en pago y quitas para que hipoteca y suministros no superen el 30 % de los ingresos.",
    "Limitar el interés de las hipotecas variables de hogares con menos de tres veces el IPREM a euríbor + 0,1 % mientras el euríbor supere el 2 %, con el coste a cargo de los bancos.",
    "Reconocer derechos sindicales a las personas inquilinas, con negociación colectiva y demandas colectivas frente a grandes tenedores e inmobiliarias.",
    "Prohibir los cortes de luz, agua y calefacción por impago involuntario y elevar durante 12 meses el bono social eléctrico al 60 % y al 100 % para los consumidores vulnerables severos."
   ]
  },
  "empleo": {
   "breve": "Salario mínimo de 1.800 euros, jornada de 30 horas en la legislatura y nuevo Estatuto de los Trabajadores.",
   "clave": [
    "Salario mínimo de 1.800 € al mes en la legislatura y actualización automática de los salarios según el coste de la vida.",
    "Jornada de 30 horas en la legislatura, empezando por 35, sin bajar salarios; dos días de teletrabajo donde sea posible.",
    "Nuevo Estatuto de los Trabajadores que elimine los efectos de las reformas laborales de 2010 y 2012; prohibir las horas extra que no se compensen con descanso.",
    "Mismas condiciones en empresas subcontratistas que en la principal y una Ley Orgánica de Huelga."
   ],
   "mas": [
    "Fijar por ley que el salario mínimo interprofesional nunca pueda ser inferior al 75 % del salario mediano.",
    "Restablecer la indemnización de 45 días por año en los despidos ilegales, con elección entre indemnización o readmisión por la persona trabajadora y salarios de tramitación.",
    "Eliminar los despidos objetivos por causas económicas, técnicas, organizativas o productivas y recuperar la autorización administrativa previa para los expedientes de regulación de empleo.",
    "Suprimir la contratación temporal sin causa de 90 días al año, extender la presunción de laboralidad a las plataformas digitales e incorporar con contrato indefinido a los falsos autónomos.",
    "Convertir en personal fijo a todas las trabajadoras y trabajadores públicos en situación de fraude de ley o abuso de temporalidad, conforme a las exigencias de la Unión Europea.",
    "Permitir elecciones sindicales en todas las empresas sin importar su tamaño, con colegio único y sin porcentaje mínimo, y dar prevalencia al convenio sectorial más favorable.",
    "Prohibir las listas negras de trabajadores por su actividad sindical o participación en huelgas y tipificarlas como infracción muy grave.",
    "Prohibir el trabajo al aire libre con avisos meteorológicos naranja o rojo y entre las 12 y las 18 horas durante olas de calor, sin pérdida de salario.",
    "Crear una Inspección de Igualdad dentro de la Inspección de Trabajo y un plan contra la precariedad laboral femenina con medidas de acción positiva.",
    "Prácticas externas incluidas en los planes de estudio, tuteladas, retribuidas al menos conforme al salario mínimo según las horas y con jornadas máximas de cinco horas."
   ]
  },
  "impuestos": {
   "breve": "Impuesto estatal permanente a grandes fortunas, subida del tipo mínimo de sociedades y supresión de la «ley Beckham».",
   "clave": [
    "Impuesto a las grandes fortunas estatal y permanente; gravamen permanente sobre los beneficios extraordinarios de la gran banca para que al menos la mitad revierta en las arcas públicas.",
    "Impuesto de Sociedades: tipo efectivo mínimo del 15 % al 19 % y del 29 % para empresas en oligopolio.",
    "IRPF: bajar el tipo estatal mínimo del 9,5 % al 9 %, subir desde 60.000 € e igualar en una legislatura la tributación de rentas del capital y del trabajo.",
    "Suprimir el régimen fiscal de las SOCIMI, la «Ley Beckham», las desgravaciones por planes privados de pensiones y la exención del IBI a la Iglesia católica.",
    "Derogar la reforma del artículo 135 de la Constitución."
   ],
   "mas": [
    "Nueva escala estatal del IRPF con tipos del 23 % entre 60.000 y 99.000 € hasta el 28,5 % desde 500.000 €; quienes ganen menos del salario mínimo no tributarán.",
    "Recuperar íntegramente los beneficios extraordinarios de eléctricas y petroleras durante las crisis energéticas y exigir a la banca la devolución completa del rescate.",
    "Impuesto de entre el 7 % y el 15 % sobre los beneficios de las grandes empresas más contaminantes y recargos a jets privados, grandes embarcaciones y vehículos de lujo.",
    "Rebajar el IVA de peluquerías y servicios veterinarios al 10 % y de los espectáculos culturales en vivo al 5 %, y eximir de IVA los productos menstruales.",
    "IVA del 21 % para los pisos turísticos, cuadruplicar el IRPF de las rentas imputadas de viviendas vacías y crear un impuesto estatal sobre viviendas vacías.",
    "Gravamen sobre las ganancias por venta de inmuebles comprados en los dos años anteriores («flipping») e impuesto al patrimonio inmobiliario de las personas jurídicas sin mínimo exento.",
    "Suprimir los beneficios fiscales en el IRPF para los arrendadores e introducir un IBI progresivo según el número de viviendas de cada titular.",
    "Aumentar la plantilla de la Agencia Tributaria hasta la media europea, centrada en grandes fortunas y empresas, y prohibir contratar con empresas que operen desde paraísos fiscales.",
    "Cotización de los autónomos como porcentaje progresivo del beneficio, nula en caso de pérdidas, y criterio de caja universal para que no adelanten el IVA de facturas impagadas.",
    "Impulsar un impuesto mínimo global a los milmillonarios y una tasa europea sobre las transacciones financieras («tasa Tobin»), complementaria de las estatales."
   ]
  },
  "pensiones": {
   "breve": "Jubilación a los 63 años sin penalización con 40 años cotizados, pensión mínima igual al salario mínimo y renta universal.",
   "clave": [
    "Jubilación ordinaria a los 63 años y sin penalización con 40 años cotizados.",
    "Pensión mínima igual al salario mínimo; eliminar el tope máximo de cotización y aplicar cotizaciones progresivas.",
    "Convertir el Ingreso Mínimo Vital en una renta universal incondicionada; IPREM de al menos 700 €.",
    "Prestación por crianza hasta los 21 años (15 % del salario mínimo al mes por hijo) y un cheque energético anual de 300 € para hogares con ingresos bajos."
   ],
   "mas": [
    "Fijar la pensión no contributiva en el 80 % del salario mínimo interprofesional y actualizar el IPREM automáticamente cada año, al menos según el IPC.",
    "Exigir una auditoría independiente y pública de las cuentas de la Seguridad Social entre 1967 y 2019, en cumplimiento de la Ley 21/2021.",
    "Permitir completar las lagunas de cotización a empleadas del hogar, trabajadores agrarios y autónomos, computar el servicio militar y elegir los años que cuentan para la pensión.",
    "Jubilación anticipada sin penalización en los sectores especialmente duros y coeficientes reductores para la danza, el circo y otras profesiones artísticas con desgaste físico.",
    "Integrar en la Seguridad Social las mutualidades alternativas al régimen de autónomos y que el sistema público asuma las contingencias profesionales que hoy gestionan las mutuas.",
    "Prestación para las personas cuidadoras familiares de dependientes equivalente al 100 %, 70 % y 40 % del salario mínimo según el grado III, II o I.",
    "Reconocer un mes de prestación por desempleo por cada dos meses cotizados, en lugar del cómputo actual.",
    "Subsidio agrario sin requisito de peonadas, ligado al 50 % del salario mínimo y que alcance el salario mínimo a partir de 200 jornadas anuales.",
    "Compatibilizar la pensión de viudedad con la de jubilación para las parejas de hecho y reconocerla a quienes enviudaron antes de existir los registros de parejas.",
    "Estrategia estatal para prevenir y erradicar el sinhogarismo con enfoque de derechos humanos y atención específica a mujeres víctimas de violencia machista sin hogar."
   ]
  },
  "sanidad": {
   "breve": "Industria sanitaria y farmacéutica pública, financiación de hasta 2.900 euros por habitante y acceso a la eutanasia.",
   "clave": [
    "Revertir la privatización y crear una industria sanitaria y farmacéutica pública.",
    "Subir la financiación hasta 2.900 € por habitante al año (en torno al 8 % del PIB).",
    "Leyes de atención primaria y de salud mental; reducir listas de espera con recursos públicos.",
    "Blindar el derecho al aborto y garantizar el acceso efectivo a la eutanasia."
   ],
   "mas": [
    "Derogar la Ley 15/1997 y las normas que permiten la gestión privada, prohibir nuevas externalizaciones y concesiones sanitarias y no prorrogar los contratos vigentes.",
    "Atender al personal de nuevo ingreso de MUFACE, ISFAS y MUGEJU directamente en la sanidad pública y avanzar hacia un sistema común para los funcionarios.",
    "Destinar al menos el 25 % del presupuesto sanitario a Atención Primaria, con 700 € por habitante, un máximo de 1.300 pacientes por médico de familia y cita en 48 horas.",
    "Ratios mínimas de 18 psiquiatras, 18 psicólogos clínicos y 23 enfermeras especialistas por cada 100.000 habitantes y fin de la contención mecánica en salud mental.",
    "Cubrir al 100 % la salud bucodental (incluidas ortodoncias, endodoncias y prótesis), oftalmológica y auditiva, la fisioterapia y la atención psicológica.",
    "Reformar el copago farmacéutico para que sea proporcional a la renta, con exención para las personas con menos recursos y reintegro de lo que supere los límites.",
    "Ley de Calidad del Sistema Nacional de Salud con base salarial común, subida del 20 % de los salarios más bajos, ratios mínimas de profesionales y tiempos máximos de espera.",
    "Sanidad universal para todas las personas que viven en España, incluidas las que están en situación irregular y las solicitantes de asilo, modificando si hace falta el RDL 7/2018.",
    "Fijar los precios de los medicamentos según sus costes reales, crear un registro de lobbies sanitarios y financiar con fondos públicos la formación continuada de los profesionales.",
    "Planificar a 15 años las plazas de formación sanitaria especializada (MIR, EIR, FIR y otras) y diseñar con los profesionales un modelo alternativo de guardias médicas."
   ]
  },
  "educacion": {
   "breve": "Gestión pública directa, libros y comedores gratuitos, supresión de la religión como asignatura y universidad pública gratuita.",
   "clave": [
    "Revertir la privatización de la educación pública, con gestión pública directa, y bajar las ratios.",
    "Libros, material escolar y comedores gratuitos para todo el alumnado.",
    "Suprimir la asignatura de religión y crear una asignatura obligatoria de educación sexual e igualdad.",
    "Universidad pública gratuita y moratoria indefinida a nuevas universidades privadas."
   ],
   "mas": [
    "Moratoria indefinida a nuevos conciertos y centros privados, reabsorción progresiva y voluntaria de la concertada en la red pública y prohibición de cuotas en los centros concertados.",
    "Ratios máximas de 13 alumnos en Infantil de 3 a 6 años, 15 en Primaria, 20 en Secundaria y 23 en Bachillerato, con ratios específicas en educación especial.",
    "Inversión pública en educación del 7 % del PIB y fondo estatal solo para la enseñanza pública de gestión directa, con cofinanciación autonómica de un euro por cada dos.",
    "Construir en un máximo de cuatro años todas las plazas públicas de 0 a 3 años necesarias para una cobertura universal, gratuita y de gestión directa.",
    "Subir un 30 % los salarios del personal de los centros públicos, actualizarlos con el coste de la vida y cubrir las vacantes en un máximo de siete días.",
    "Reducir la jornada lectiva a 22 horas en Infantil y Primaria y a 17 en Secundaria, con un máximo de 180 alumnos por docente y supresión de la séptima hora.",
    "Becas-salario universitarias de hasta 800 € mensuales según la renta familiar y gratuidad progresiva de grado, máster y doctorado en las universidades públicas.",
    "Elevar la inversión pública en ciencia al 2 % del PIB, subir al menos un 30 % los salarios del personal investigador y alcanzar un 80 % de profesorado funcionario.",
    "Ley de protección de la infancia en el entorno digital que obligue a las plataformas a prevenir el ciberacoso, la explotación sexual y los diseños adictivos.",
    "Plan de adaptación climática de los centros públicos para mantenerlos entre 17 y 26 grados, retirar el amianto y eliminar progresivamente las aulas provisionales."
   ]
  },
  "inmigracion": {
   "breve": "Derogación de la Ley de Extranjería, nacionalidad por ius soli, cierre de los CIE y reparto de menores no acompañados entre comunidades.",
   "clave": [
    "Derogar la Ley de Extranjería, aprobar una ley integral nueva y cerrar los CIE.",
    "Nacionalidad para todas las personas nacidas en España (ius soli).",
    "Vías legales y seguras; sustituir Frontex por un sistema público europeo de salvamento; acabar con los acuerdos migratorios con terceros países.",
    "Reparto obligatorio de menores no acompañados entre comunidades y Ley Integral Antirracista."
   ],
   "mas": [
    "Procedimiento permanente de regularización basado en el arraigo social, familiar y comunitario, sin que el derecho a residir dependa exclusivamente de tener un contrato de trabajo.",
    "Acreditar la estancia con medios amplios como el padrón, los abonos de transporte o los registros sanitarios y permitir el alta en la Seguridad Social sin tiempo previo de estancia.",
    "Reducir a un año el plazo de residencia para obtener la nacionalidad con arraigo acreditado y reconocer DNI y derecho al voto a quien vive y trabaja en España.",
    "Prohibir las identificaciones policiales por perfil racial, consideradas delito de odio, con registro documental obligatorio de las identificaciones y supervisión independiente.",
    "Poner fin a las devoluciones en caliente y retirar de las fronteras los elementos lesivos para la integridad física, investigando las muertes y desapariciones.",
    "Promover la derogación del Pacto Europeo de Migración y Asilo e impugnar ante el Tribunal de Justicia de la UE el Reglamento europeo de retornos.",
    "Visado de búsqueda de empleo, renovación de permisos no ligada solo a un contrato en vigor y prórroga automática cuando la Administración no resuelva en plazo.",
    "Eliminar las tasas de regularización y nacionalidad para personas con bajos ingresos y modernizar la plataforma Mercurio y las oficinas de extranjería.",
    "Presunción de minoría de edad ante dudas razonables en la determinación de la edad y Fondo Estatal de Acogida e Inclusión para financiar los sistemas autonómicos.",
    "Trasladar a la península a personas migrantes de Ceuta para garantizar su atención e investigar los posibles abusos de las Fuerzas de Seguridad contra ellas."
   ]
  },
  "energia": {
   "breve": "Sistema eléctrico 100 % renovable, Empresa Pública de Energía, Red Eléctrica pública y transporte público gratuito en todo el Estado.",
   "clave": [
    "Sistema eléctrico 100 % renovable y cumplir el calendario de cierre nuclear.",
    "Empresa Pública de Energía, compra de la mayoría de Repsol por el Estado y Red Eléctrica 100 % pública.",
    "Transporte público gratuito en todo el Estado con tarjeta única y renacionalización del ferrocarril.",
    "Prohibir vuelos cortos con alternativa en tren de menos de 3 horas y una ley de residuo cero."
   ],
   "mas": [
    "Reducir las emisiones al menos un 55 % en 2030 respecto a 1990, con la ambición de llegar al 65 %, y adelantar la neutralidad climática a 2040.",
    "Alcanzar al menos un 95 % de generación eléctrica renovable en 2035 y reducir a la mitad la energía primaria fósil en 2030, con los ciclos combinados como respaldo transitorio.",
    "Recuperar el tope al gas en 40 €/MWh, impedir que las tarifas domésticas de luz y gas suban más del 5 % y acabar con el mercado marginalista con una factura progresiva.",
    "Elevar la inversión ferroviaria de unos 5.000 a 20.000 M€ anuales, con tren para todos los municipios de más de 20.000 habitantes y la red electrificada al 100 % en 2030.",
    "Frenar la ampliación de los aeropuertos de El Prat y Madrid-Barajas y del puerto de Valencia y descartar las grandes infraestructuras incompatibles con los objetivos climáticos.",
    "Consulta vecinal obligatoria y reserva del 30 % de las participaciones para vecinos y entidades locales en las nuevas plantas renovables, aplicable también a las de los últimos tres años.",
    "Financiar al 100 % las placas fotovoltaicas y la rehabilitación energética de familias de ingresos bajos y subvencionar la sustitución de las instalaciones domésticas de gas.",
    "Auditar todas las ayudas públicas a los combustibles fósiles y aprobar un plan para eliminarlas progresivamente y destinar esos recursos a renovables y ahorro energético.",
    "Ley que condicione los grandes centros de datos a la disponibilidad real de agua y electricidad y les obligue a usar energía renovable adicional.",
    "Elevar la cuota ferroviaria de mercancías al 15 % en 2028 y al 18 % en 2030 y no renovar las concesiones de autopistas a grandes corporaciones."
   ]
  },
  "economia": {
   "breve": "Banca pública, supermercados públicos, tope a los márgenes de distribuidoras y cooperativas para empresas en riesgo.",
   "clave": [
    "Banca pública, red pública de supermercados y tope a los márgenes de las grandes distribuidoras.",
    "Ley de Empresas en Crisis para convertir en cooperativas las empresas en riesgo de cierre.",
    "Moratoria a nuevas macroexplotaciones y a la compra de tierras fértiles por fondos; Ley Jornalera.",
    "Rechazo a los tratados de libre comercio que prioricen a las multinacionales."
   ],
   "mas": [
    "Fomentar empresas públicas que operen en el mercado sin incorporar márgenes de beneficio, financiadas con su actividad, para contener los precios.",
    "Reservar a autónomos y pymes un porcentaje de la contratación pública y reconocerles la condición de consumidores frente a la banca, las eléctricas y las telecomunicaciones.",
    "Crear un Banco Público de Tierras para jóvenes y cooperativas y una PAC redistributiva que elimine los derechos históricos y limite la concentración de ayudas.",
    "Moratoria a nuevos regadíos hiperintensivos de grandes propietarios y prohibición de vender derechos de riego a fondos de inversión y grandes corporaciones.",
    "Reforzar la Ley de la Cadena Alimentaria para que los precios en origen cubran los costes de producción y obligar a los comedores públicos a comprar alimentos de proximidad.",
    "Exigir a los productos de terceros países los estándares europeos ambientales, laborales y de bienestar animal, con rechazo de entrada o aranceles destinados al sector afectado.",
    "Hoja de ruta para eliminar las jaulas en las explotaciones ganaderas, con un fondo público de transición, y fin progresivo de la exportación de animales vivos a larga distancia.",
    "Combatir la «uberización» de la economía y garantizar el cumplimiento de la proporción de una licencia de VTC por cada 30 licencias de taxi.",
    "Nueva Ley de Minas que sustituya la de 1973, con participación de las poblaciones afectadas, y prohibición de los vertidos mineros a cauces y aguas públicas.",
    "Duplicar la partida de Cultura de los Presupuestos Generales del Estado en una legislatura y crear una Agencia Estatal de Música y una plataforma pública de streaming musical."
   ]
  },
  "igualdad": {
   "breve": "Permiso de nacimiento de 26 semanas por progenitor, aborto y anticoncepción gratuitos y Sistema Estatal de Cuidados.",
   "clave": [
    "Permiso por nacimiento de 26 semanas por progenitor y permiso parental de 10 semanas pagado al 100 %.",
    "Blindar el aborto y anticoncepción y reproducción asistida gratuitas.",
    "Sistema Estatal de Cuidados como «cuarto pilar» del bienestar y gestión pública de las residencias.",
    "Paquete de derechos LGTBIQA+ y regularización de víctimas de trata y mujeres en prostitución."
   ],
   "mas": [
    "Fondo de contingencia de 1.000 M€ para financiar de forma estable las políticas contra todas las formas de violencia machista, mediante la reforma de la Ley General Presupuestaria.",
    "Incorporar el aborto como derecho fundamental en el artículo 15 de la Constitución y eliminar del Código Penal todas las referencias al aborto consentido.",
    "Prestación equivalente al salario mínimo durante seis meses prorrogables para mujeres que salen de la violencia machista, con alternativa habitacional digna e inmediata.",
    "Ampliar la definición legal de violencia machista más allá de la pareja, conforme al Convenio de Estambul, y erradicar de los juzgados el «síndrome de alienación parental».",
    "Opción de género no binario en los documentos oficiales, cupo laboral trans en el empleo público y eliminar obstáculos a la libre determinación de género de menores de 14 años.",
    "Permisos retribuidos de cuidados de 7 días (12 si son menores de 6 años), de fuerza mayor de 7 días al año y de fallecimiento de 10 días hábiles.",
    "Equiparar a familia numerosa las familias monomarentales desde el primer hijo y aprobar de inmediato la Ley de Familias que reconozca la diversidad familiar.",
    "Marco jurídico para redes de cuidados más allá de la familia y la pareja, incluidas amistades y relaciones no monógamas, a efectos de permisos y crianza.",
    "Ley orgánica para adaptar la legislación a la Convención de la ONU sobre discapacidad y fondo de accesibilidad dotado con el 1 % de la inversión estatal en obra pública.",
    "Equiparar los derechos de las parejas de hecho a los del matrimonio en todos los ámbitos, incluidas prestaciones, permisos y fiscalidad."
   ]
  },
  "seguridad": {
   "breve": "Derogación de la Ley de Seguridad Ciudadana, supresión de la Audiencia Nacional y legalización del cannabis.",
   "clave": [
    "Derogar la Ley de Seguridad Ciudadana, identificación visible de todos los agentes y prohibir la infiltración policial en movimientos sociales.",
    "Suprimir la Audiencia Nacional, que la Fiscalía instruya las causas y renovar el CGPJ y el Tribunal Constitucional.",
    "Legalizar el cannabis para uso medicinal y recreativo.",
    "Investigar el caso Pegasus y aprobar una nueva Ley de Secretos Oficiales."
   ],
   "mas": [
    "Prohibir el uso de pelotas de goma, suprimir la presunción de veracidad de los atestados policiales como prueba única y limitar la detención a 48 horas en cualquier supuesto.",
    "Implantar cámaras corporales y en los vehículos policiales y crear un mecanismo independiente de supervisión de las actuaciones policiales.",
    "Crear un delito de utilización de las estructuras de seguridad del Estado para delinquir o perseguir a adversarios políticos, con expulsión de los agentes implicados.",
    "Exigir mayoría absoluta y el apoyo de la mitad de los grupos para elegir a los vocales judiciales del CGPJ y cubrir la mitad de las plazas judiciales por concurso.",
    "Suprimir los aforamientos y extender la figura del jurado popular para ampliar la participación ciudadana en la Administración de Justicia.",
    "Publicar íntegramente todos los autos y sentencias y obligar a jueces y juezas a declarar bienes, ingresos y actividades ajenas, incluida la preparación de oposiciones.",
    "Restablecer la jurisdicción universal derogando la reforma de la Ley Orgánica 1/2014, incluida la violencia contra mujeres e infancia en plataformas digitales.",
    "Ampliar el recurso de amparo ante el Tribunal Constitucional a los derechos económicos y sociales como la vivienda, la salud, la educación o el trabajo.",
    "Prohibir la contratación pública con empresas implicadas en corrupción desde que existan indicios judiciales y dejar sin efecto sus contratos vigentes.",
    "Especializar juzgados, fiscalías y equipos forenses en violencia sexual y garantizar asistencia letrada gratuita a sus víctimas con independencia de su renta."
   ]
  },
  "exterior": {
   "breve": "Salida de la OTAN, estatuto de neutralidad, ruptura con Israel y rechazo al objetivo del 5 % del PIB en defensa.",
   "clave": [
    "Salida de la OTAN, cierre de las bases de Rota y Morón y estatuto de neutralidad.",
    "Revertir el aumento del gasto militar y rechazar el objetivo del 5 %.",
    "Ruptura de relaciones y embargo de armas con Israel; reconocimiento de la República Árabe Saharaui Democrática.",
    "Solución negociada en Ucrania y levantamiento de sanciones unilaterales como el bloqueo a Cuba."
   ],
   "mas": [
    "Reforma constitucional que incorpore el rechazo expreso a la guerra y congelación del gasto militar durante la legislatura, salvo mejoras salariales y de alojamiento de la tropa.",
    "Aprobación previa del Congreso para financiar gasto militar con el Fondo de Contingencia, información mensual de su ejecución y auditoría de los Programas Especiales de Armamento.",
    "Adhesión al Tratado sobre la Prohibición de las Armas Nucleares y prohibición de los sistemas de armas letales autónomos sin control humano significativo.",
    "Reconocimiento institucional del genocidio en Palestina, definición del sionismo como forma de racismo y persecución de militares y autoridades israelíes mediante la jurisdicción universal.",
    "Referéndum de autodeterminación del Sáhara Occidental, ruptura con el apoyo al plan de autonomía marroquí y nacionalidad española para los saharauis nacidos bajo administración española.",
    "Reforma democrática de la ONU que elimine el derecho de veto en el Consejo de Seguridad y rechazo a foros restringidos como el G7.",
    "Reformar los estatutos del Banco Europeo de Inversiones para prohibir la inversión en armamento y suspender el instrumento europeo de apoyo a la producción de munición (ASAP).",
    "Prohibir que las administraciones contraten con empresas implicadas en crímenes internacionales o que contribuyan materialmente a su comisión.",
    "Revertir la privatización de la cooperación, aumentar la ayuda humanitaria y blindar e incrementar la financiación de la UNRWA para la población refugiada palestina.",
    "Mantener relaciones de cooperación con China basadas en el multilateralismo y oponerse a las políticas de bloques que buscan limitar su participación internacional."
   ]
  },
  "estado": {
   "breve": "Proceso constituyente con referéndum entre monarquía y república, Senado federal, voto a los 16 años y Estado laico.",
   "clave": [
    "Proceso constituyente y referéndum entre monarquía y república, reconociendo la plurinacionalidad.",
    "Sistema electoral más proporcional, Senado federal y voto a los 16 años.",
    "Estado laico: recuperar los bienes inscritos indebidamente por la Iglesia católica.",
    "Verdad, justicia y reparación para víctimas de la dictadura y un día festivo nacional de la Memoria Democrática."
   ],
   "mas": [
    "Eliminar la inviolabilidad del Rey del artículo 56.3 de la Constitución, someter a la Casa Real a las mismas obligaciones de transparencia e investigar los negocios de la monarquía.",
    "Circunscripción autonómica para el Congreso, sustitución del método D'Hondt por el Sainte-Laguë y supresión de las barreras electorales de entrada.",
    "Prohibir que los partidos financien sus campañas con créditos bancarios o del ICO y sustituir el envío de propaganda electoral por un envío único organizado por la Administración.",
    "Dos debates electorales obligatorios en medios públicos entre candidatos a la Presidencia; quien falte sin causa justificada perderá sus espacios de propaganda en esos medios.",
    "Denunciar el Concordato y los acuerdos de 1979 con la Santa Sede y aprobar una Ley de Libertad de Conciencia que suprima los privilegios de la Iglesia católica.",
    "Reformar la Ley de Amnistía de 1977 para permitir investigar los crímenes de la dictadura y la Transición y ratificar la imprescriptibilidad de los crímenes de lesa humanidad.",
    "Ley de bebés robados con fiscalía especializada y banco estatal de ADN gratuito, y ley de reparación para las víctimas del Patronato de Protección a la Mujer.",
    "Transformar el Valle de Cuelgamuros, retirar símbolos franquistas como el Arco de la Victoria de Madrid y crear un Centro Estatal de Memoria Democrática.",
    "Ley orgánica del derecho a la información que limite la concentración mediática, reparta el espacio audiovisual por tercios (público, privado y comunitario) y cree una red social pública.",
    "Derogar la Ley 18/2013 que declara la tauromaquia patrimonio cultural, retirar las ayudas a espectáculos con maltrato animal y prohibir la asistencia de menores a corridas."
   ]
  }
 }
},
{
 "id": "erc",
 "name": "ERC",
 "nombre": "Esquerra Republicana de Catalunya",
 "ambito": "Cataluña",
 "doc": "Por el país. Por la gente. Por el futuro. Programa electoral, elecciones al Congreso 2026",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "46 páginas, 227 medidas numeradas",
 "idioma": "Catalán",
 "estructura": [
  "Defender el país",
  "Defender a la gente",
  "Defender los servicios públicos"
 ],
 "resumen": "El programa se organiza en tres prioridades: «defender el país», «defender a la gente» y «defender los servicios públicos». Combina reivindicaciones de autogobierno para Cataluña (referéndum de autodeterminación, financiación singular, condonación de la deuda del FLA y traspasos de Rodalies, aeropuertos, tributos y otras competencias) con medidas sociales como un salario mínimo catalán de 1.460 €, la jornada de 37,5 horas, más impuestos a grandes fortunas, banca y rentas del capital y la ampliación de la cartera sanitaria pública.",
 "esencial": [
  "Referéndum de autodeterminación en Cataluña con mediación europea",
  "Nuevo modelo de financiación en el que Cataluña recaude sus propios impuestos",
  "Traspaso de Rodalies, aeropuertos y tributos a la Generalitat",
  "Salario mínimo catalán y jornada de 37,5 horas sin rebaja salarial",
  "Más impuestos a grandes fortunas, banca y rentas del capital",
  "Ampliación de la sanidad pública con atención dental, oftalmológica y psicológica gratuita"
 ],
 "pdf": "pdf/erc.pdf",
 "pdfMB": "0,3 MB",
 "ejes": {
  "E1": {
   "p": -1,
   "e": "Subir del 30 % al 35 % el IRPF del capital, hacer permanentes los impuestos a grandes fortunas (nuevo tramo desde 100 M€), banca y energéticas; baja el IRPF a rentas del trabajo bajo 35.000 € (pp. 21-22)."
  },
  "E2": {
   "p": -1,
   "e": "1,5 % del PIB para vivienda pública, venta forzosa de suelo no edificado y más impuestos a usos no residenciales y grandes tenedores (pp. 19-20); no propone topes de alquiler estatales."
  },
  "E3": {
   "p": -1.5,
   "e": "Jornada de 37,5 horas sin rebaja salarial, despido improcedente a 45 días, SMI al 60 % del salario medio y salario mínimo catalán de 1.460 € (pp. 20, 26)."
  },
  "E4": {
   "p": -1,
   "e": "Banca pública (ICF con licencia plena, ICO como banco de promoción) y titularidad pública de las hidroeléctricas al caducar las concesiones (pp. 22, 30); no plantea nacionalizaciones generales."
  },
  "E5": {
   "p": -1,
   "e": "Frenar la privatización sanitaria, sanidad de gestión pública y flexibilizar la remunicipalización de servicios (pp. 41, 43); no menciona la concertada."
  },
  "E6": {
   "p": -1,
   "e": "Más gasto (6 % del PIB en educación, 1,5 % en vivienda) y reforma de la Ley de Estabilidad Presupuestaria y de la regla de gasto (pp. 11, 19, 44)."
  },
  "E7": {
   "p": -0.5,
   "e": "Plan contra la inflación analizando márgenes de beneficio y precios agrarios que cubran costes (pp. 21, 33); no propone topes de precios."
  },
  "E8": {
   "p": -1,
   "e": "Blindar la revalorización con la inflación, IPC territorial y jubilación anticipada sin penalización en trabajos penosos; rechaza privatizar pensiones (pp. 25-26)."
  },
  "S1": {
   "p": -0.5,
   "e": "Traspaso de competencias migratorias con enfoque de derechos, rechazo a centros de retorno y deportaciones automáticas, vías legales y seguras (pp. 14, 17); no plantea regularización."
  },
  "S2": null,
  "S3": {
   "p": -1.5,
   "e": "Reconocimiento legal de identidades no binarias, tipificación penal de terapias de conversión y ley de memoria LGTBI+ (p. 24)."
  },
  "S4": {
   "p": -0.5,
   "e": "Derogar la Ley de Seguridad Ciudadana (p. 8), pero también endurecer penas por armas y robo de cable y más jueces (p. 43)."
  },
  "S5": {
   "p": -1,
   "e": "Suprimir los delitos de ofensa a los sentimientos religiosos y de injurias a la Corona y a las asambleas legislativas (p. 8)."
  },
  "S6": {
   "p": -1.5,
   "e": "Reformar la Ley Orgánica 1/2004 para incluir violencia económica, vicaria y digital y blindar las políticas feministas (p. 24)."
  },
  "S7": {
   "p": -1.5,
   "e": "Dejar sin efecto los acuerdos de 1979 con la Santa Sede para aplicar el IBI a las confesiones religiosas (p. 8); escuela pública laica (p. 10)."
  },
  "S8": {
   "p": -1,
   "e": "Exige cumplir la Ley de Memoria Democrática y añade nuevas leyes de desaparición forzada de menores y de memoria LGTBI+, y Via Laietana como centro de memoria (pp. 8, 24)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Al menos 1,5 % del PIB para vivienda pública, traspaso de inmuebles de la SAREB y subida del IVA del alquiler turístico.",
   "clave": [
    "Destinar al menos el 1,5 % del PIB a políticas de vivienda en los Presupuestos Generales, transfiriendo los recursos a las comunidades para ampliar el parque público de alquiler.",
    "Traspasar de forma inmediata y gratuita a la Generalitat todos los inmuebles de la SAREB y de Casa 47 en Cataluña, con recursos para rehabilitarlos como vivienda pública.",
    "Subir el IVA y el ITP en la compra de viviendas destinadas a uso turístico, alquiler de temporada, segunda residencia o que queden vacías, y bajarlos cuando sean primera residencia.",
    "Elevar al 21 % el IVA del alquiler turístico, incluidas las viviendas ofrecidas o gestionadas por plataformas digitales.",
    "Delegar en la Generalitat, por la vía del artículo 150.1 de la Constitución, la competencia plena para aprobar una ley catalana de arrendamientos urbanos."
   ],
   "mas": [
    "Incluir en la legislación básica de suelo el deber de edificar el suelo clasificado en plazo, con venta o sustitución forzosa para los propietarios que lo incumplan.",
    "Deducciones e incentivos fiscales a la rehabilitación, la construcción de vivienda protegida y la mejora de la eficiencia energética de las viviendas.",
    "Mejorar la regulación de los arrendamientos para evitar desahucios de personas vulnerables sin alternativa habitacional, manteniendo compensaciones a los pequeños propietarios perjudicados.",
    "Nuevas limitaciones y obligaciones fiscales a fondos y grandes tenedores que destinen viviendas a usos distintos de la vivienda habitual.",
    "Obligar a la Agencia Tributaria a publicar cada año datos territorializados de compraventas y alquileres y a informar trimestralmente a las administraciones de los inmuebles de grandes tenedores.",
    "Obligar a las compañías de agua, electricidad y gas a facilitar datos a las administraciones competentes en vivienda y derechos sociales, con protección de datos personales."
   ]
  },
  "empleo": {
   "breve": "Salario mínimo catalán propio, jornada de 37,5 horas sin rebaja salarial y recuperación de la indemnización de 45 días por año.",
   "clave": [
    "Subir el salario mínimo interprofesional estatal hasta el 60 % del salario medio bruto, conforme a la Carta Social Europea.",
    "Transferir a la Generalitat la competencia para fijar un salario mínimo catalán de 1.460 €, superior al estatal.",
    "Reducir la jornada máxima legal a 37,5 horas semanales sin rebaja salarial, modificando el artículo 34 del Estatuto de los Trabajadores, con registro diario digital accesible a la Inspección.",
    "Recuperar la indemnización por despido improcedente de 45 días por año con un máximo de 42 mensualidades, los salarios de tramitación y la autorización administrativa previa de la Generalitat para despidos colectivos.",
    "Indemnización adicional sin tope máximo en los despidos sin causa, en cumplimiento de la decisión del Comité Europeo de Derechos Sociales de julio de 2024."
   ],
   "mas": [
    "Participación de la representación de los trabajadores en los consejos de administración, con cuotas mínimas según el tamaño de la empresa.",
    "Cuotas de autónomos según ingresos reales, reducidas para quienes ganen menos del salario mínimo y con nuevos tramos para ingresos superiores a 6.000 € mensuales.",
    "Equiparar la protección social de los autónomos a la de los asalariados: prestación por cese de actividad efectiva, subsidio para mayores de 52 años y prestaciones iguales al Régimen General.",
    "Cuota cero para autónomos con enfermedad grave desde su inicio y bonificaciones para contratar sustitutos.",
    "Invertir la carga de la prueba en los juicios por falsos autónomos contra empresas con sentencias en contra por casos similares en los 9 meses anteriores.",
    "Actualizar la Ley de Prevención de Riesgos Laborales para incorporar los riesgos de la digitalización y el cambio climático, con perspectiva de género y edad.",
    "Prohibir la externalización de las tareas ordinarias de las camareras de piso y compensar a las empleadas del hogar los periodos anteriores a 2022 sin derecho a desempleo.",
    "Incluir la fibromialgia, la fatiga crónica o el lupus como enfermedades profesionales cuando se acredite su origen laboral.",
    "Completar el Estatuto del Artista adaptando fiscalidad, cotizaciones de autónomos y prestaciones por inactividad a la intermitencia del trabajo cultural."
   ]
  },
  "impuestos": {
   "breve": "Tipo del IRPF del 35 % sobre rentas del capital, impuesto permanente a grandes fortunas y gravamen permanente a la banca.",
   "clave": [
    "Subir del 30 % al 35 % el tipo máximo del IRPF sobre las rentas del capital y bajar la tributación de las rentas del trabajo inferiores a 35.000 €.",
    "Hacer permanente el impuesto temporal de solidaridad de las grandes fortunas, subir el tipo para patrimonios de más de 10 M€ y crear un tramo nuevo desde 100 M€.",
    "Convertir en permanente el gravamen extraordinario a la banca y recuperar el impuesto a las grandes energéticas, con exenciones para invertir en transición energética.",
    "Bajar el IVA de los alimentos básicos y los productos de higiene, eliminando buena parte de las reducciones y deducciones que se apartan de la media europea.",
    "Suprimir la «ley Beckham» para trabajadores desplazados y el régimen fiscal favorable para teletrabajadores internacionales."
   ],
   "mas": [
    "Adoptar medidas contra el «dumping fiscal» de las comunidades gobernadas por el PP, especialmente la Comunidad de Madrid.",
    "Fiscalidad coordinada en la UE para que las grandes corporaciones digitales tributen por sus ingresos, y un impuesto digital europeo como recurso propio de la Unión.",
    "Eliminar las exenciones fiscales al combustible de aviación y navegación y revisar la fiscalidad del gas para acercar la recaudación ambiental a la media europea.",
    "Reforzar la progresividad del Impuesto sobre Sociedades según tamaño y capacidad, y ampliar los gastos deducibles de los autónomos en el IRPF (vehículo, suministros y vivienda).",
    "Exigir cláusulas de permanencia de la actividad y del empleo a las empresas que reciban ayudas públicas o deducciones a la inversión.",
    "Aplicar el IBI a todas las propiedades de las confesiones religiosas, dejando sin efecto los acuerdos de 1979 con la Santa Sede y los de 1992 con otras confesiones.",
    "Permitir aplazar hasta 4 años el pago de los tributos cedidos.",
    "Reformar la Ley de Estabilidad Presupuestaria: flexibilizar el gasto de ayuntamientos saneados, permitir usar remanentes y adaptar la regla de gasto al nuevo marco fiscal europeo.",
    "Pedir a la UE una cláusula de inversión verde en las reglas fiscales y endeudamiento común para la transición ecológica."
   ]
  },
  "pensiones": {
   "breve": "Revalorización con el IPC de cada territorio, jubilación anticipada sin penalización en profesiones penosas y prestación por crianza.",
   "clave": [
    "Blindar la revalorización de las pensiones públicas con la inflación.",
    "Revalorizar las pensiones según el IPC de cada territorio para tener en cuenta las diferencias en el coste de la vida.",
    "Jubilación anticipada sin penalización mediante coeficientes reductores en profesiones penosas, peligrosas, tóxicas o insalubres, en particular conductores profesionales de transporte por carretera y Agentes Rurales.",
    "Prestación universal por crianza desde 200 € por familia, más alta en territorios con mayor coste de vida como Cataluña.",
    "Garantizar la financiación de la dependencia: 2.018 M€ en 2026, 7.200 M€ en 2027 y cumplimiento del 50 % de financiación a cargo del Estado."
   ],
   "mas": [
    "Asegurar con financiación pública las cotizaciones de las personas cuidadoras familiares no profesionales y priorizar su reincorporación laboral.",
    "Hacer permanente la prohibición de cortes de suministros a hogares vulnerables, vigente hasta el 31 de diciembre de 2026, y condonar la deuda acumulada durante la moratoria.",
    "Más financiación estatal para adaptar la cuantía del ingreso mínimo vital al coste de la vida en Cataluña.",
    "Automatizar la concesión del bono social eléctrico, ampliar los umbrales de renta y revisar los límites de consumo bonificado.",
    "Revisar la prestación por cuidado de menores con cáncer u otra enfermedad grave (CUME) para facilitar su acceso y simplificar trámites.",
    "Reconocer como cotizados todos los años aportados por los mutualistas que pasen al Régimen Especial de Trabajadores Autónomos.",
    "Equiparar en el nivel A de la función pública a educadores y trabajadores sociales."
   ]
  },
  "sanidad": {
   "breve": "Atención bucodental gratuita con cargo al Estado, gafas y lentillas financiadas, salud mental universal y más financiación sanitaria estatal.",
   "clave": [
    "Incorporar a la cartera común del Sistema Nacional de Salud la atención bucodental integral y gratuita, incluidas caries, endodoncias y prótesis, con el coste a cargo del Estado.",
    "Incluir en la sanidad pública la atención oftalmológica y optométrica y financiar las gafas graduadas y lentillas prescritas, con independencia de la renta.",
    "Garantizar el acceso universal y gratuito a la atención psicológica y de salud mental, incluida la psicoterapia, con recursos transferidos por el Estado.",
    "Aumentar de forma estructural la financiación estatal transferida a las administraciones sanitarias para ampliar plantillas, mejorar condiciones y guardias y reducir listas de espera."
   ],
   "mas": [
    "Blindar una sanidad pública y universal y frenar su privatización.",
    "Blindar las competencias exclusivas de la Generalitat en sanidad frente a cualquier recentralización y traspasar de inmediato las funciones pendientes.",
    "Que Cataluña planifique la formación de las profesiones sanitarias según las necesidades de su sistema de salud."
   ]
  },
  "educacion": {
   "breve": "Gasto estatal del 6 % del PIB en educación, plaza pública de 0 a 3 años, inmersión lingüística y más gasto universitario.",
   "clave": [
    "Destinar el 6 % del PIB estatal a educación para reforzar la escuela pública, reducir ratios y mejorar los salarios del profesorado.",
    "Financiación estatal suficiente para una plaza pública y gratuita de 0 a 3 años para todos los niños, con implantación progresiva.",
    "Blindar la inmersión lingüística y el catalán como lengua vehicular, modificando la legislación estatal para impedir la imposición de porcentajes lingüísticos a los centros.",
    "Elevar el gasto público en universidades al 1 % del PIB y en investigación al 1,5 % del PIB en 2030, según la LOSU y la Ley de la Ciencia."
   ],
   "mas": [
    "Competencias exclusivas de la Generalitat en educación y en la elaboración de los currículos de todas las etapas.",
    "Mecanismos de protección y asesoramiento jurídico a centros y profesorado frente a las que el documento llama «injerencias judiciales».",
    "Eliminar la tasa de reposición en universidades, acelerar la contratación indefinida de investigadores y mejorar la retribución de los doctorandos.",
    "Financiación basal estable para universidades, centros de investigación e infraestructuras científicas.",
    "Transferir a la agencia catalana AQU todas las evaluaciones y acreditaciones universitarias, incluidas las del profesorado que hoy realiza la ANECA.",
    "Eliminar el distrito único universitario para que Cataluña planifique el acceso a la universidad.",
    "Reformar el Real Decreto 592/2014 de prácticas universitarias para que no sustituyan puestos de trabajo remunerados.",
    "Endurecer los requisitos para crear, reconocer y acreditar universidades.",
    "Sistema integrado de formación profesional a lo largo de la vida gestionado por la Generalitat, con financiación estable de los centros de FP."
   ]
  },
  "inmigracion": {
   "breve": "Competencias de migración y asilo para Cataluña, rechazo a los centros de retorno en terceros países y ley integral contra la trata.",
   "clave": [
    "Traspasar a Cataluña las competencias integrales en migración y asilo, para una gestión propia de la acogida y la integración.",
    "Rechazar los centros de retorno en terceros países y condicionar la aplicación del Reglamento europeo de Retorno a garantías que eviten deportaciones automáticas.",
    "Nueva Ley de asilo que impida externalizar las solicitudes de protección a terceros países, y ampliación de vías legales y seguras de migración.",
    "Ley integral contra la trata que garantice los derechos de las víctimas con independencia de su situación administrativa, reformando la ley de extranjería."
   ],
   "mas": [
    "Combatir la discriminación racial y étnica en el empleo, la vivienda y el acceso a bienes y servicios, y proteger a quienes la denuncian.",
    "Formación especializada de jueces y fiscales para aplicar los delitos de odio racistas y xenófobos.",
    "Perseguir a las organizaciones que promueven de forma organizada el odio y la violencia por origen o etnia.",
    "Exigir a las plataformas digitales responsabilidad frente a contenidos racistas y actuar contra campañas de desinformación que señalan a colectivos por su origen.",
    "Traspasar a la Generalitat la homologación y el reconocimiento de títulos extranjeros."
   ]
  },
  "energia": {
   "breve": "Reducción de CO2 del 65 % en 2030, autoconsumo compartido ampliado, hidroeléctricas públicas y culminación del traspaso de Rodalies.",
   "clave": [
    "Reducir las emisiones de CO2 al menos un 65 % en 2030 y un 95 % en 2040 respecto a 1990.",
    "Ampliar el autoconsumo compartido a 10 km con carácter general y 20 km en zonas rurales, con peajes proporcionales y balance neto cero.",
    "Recuperar la titularidad pública de las centrales hidroeléctricas y traspasarlas a la Generalitat a medida que caduquen las concesiones.",
    "Culminar el traspaso integral de Rodalies, incluida la línea R1 y después R2 Sud, R3, R4 Nord y R16, y financiar el Plan de Rodalies 2026-2030 con 1.400 M€ adicionales.",
    "Alcanzar 4.000 puntos de recarga de más de 350 kW antes de 2030, con atención al transporte de mercancías."
   ],
   "mas": [
    "Nueva Ley del Sector Eléctrico y Ley de Gases Renovables que sustituya a la Ley de Hidrocarburos y transponga el paquete europeo de energía limpia.",
    "Modificar los incentivos del Real Decreto-ley 8/2023 para que no refuercen la posición de las grandes eléctricas y favorecer la entrada de nuevos operadores.",
    "Recuperar el Fondo Nacional para la Sostenibilidad del Sistema Eléctrico para que los combustibles fósiles financien las renovables y abaratar la factura.",
    "Compensar a los pequeños inversores fotovoltaicos afectados por los cambios retroactivos del régimen retributivo de las renovables.",
    "Condicionar la autorización de líneas de muy alta tensión al informe favorable de la Generalitat y rechazar las vinculadas al clúster Forestalia.",
    "Modificar el Plan Hidrológico del Ebro para garantizar caudales ecológicos y un plan estatal anual contra la regresión del delta.",
    "Convertir los 435 M€ para las desaladoras de la Tordera y el Foix en aportación estatal a fondo perdido y no en crédito.",
    "Más financiación estructural del Estado al transporte público para tarifas asequibles y para revertir el déficit de la ATM de Barcelona.",
    "Desdoblar los tramos de vía única Arenys-Maçanet, Tarragona-Lleida, Vic-Ripoll y Lleida-Cervera-Manresa, y acelerar el Corredor Mediterráneo.",
    "Implantar la viñeta como sistema único de pago en las vías de alta capacidad, mediante un consorcio Estado-Generalitat."
   ]
  },
  "economia": {
   "breve": "Licencia bancaria plena para el Institut Català de Finances, servicio bancario universal y rechazo al acuerdo UE-Mercosur.",
   "clave": [
    "Completar la licencia bancaria plena del Institut Català de Finances y convertir el ICO en banco de promoción con préstamo directo a proyectos industriales.",
    "Servicio bancario universal obligatorio: efectivo y atención presencial en cada municipio por encima de un umbral, financiado por las entidades según su cuota de mercado.",
    "Rechazar la ratificación del acuerdo UE-Mercosur y su aplicación provisional mientras no se pronuncie el Tribunal de Justicia de la UE.",
    "Sustituir los PERTE, que terminan en 2026, por proyectos estratégicos de gestión descentralizada, recuperando la idea de «PERTE territorial».",
    "Plan conjunto Estado-comunidades contra la inflación en alimentos, energía y vivienda, analizando márgenes de beneficio y competencia en cada sector."
   ],
   "mas": [
    "Reformar la Ley de la cadena alimentaria para garantizar precios que cubran los costes de producción, actualizados según combustibles y fertilizantes.",
    "Aumentar la aportación estatal a ENESA para abaratar los seguros agrarios e incluir en ellos los daños del mildiu en la uva de Cataluña.",
    "Descentralizar la PAC y los fondos europeos agrarios y pesqueros y garantizar recursos propios para el sector en el Marco Financiero 2028-2034.",
    "Financiación estatal plurianual para modernizar los regadíos, con prioridad para los Canals d'Urgell, sin cargar el coste a los regantes.",
    "Regularizar la potencia real de los motores pesqueros, proporcionalidad en el régimen sancionador y cuotas para las capturas accidentales de atún rojo.",
    "Morosidad cero y contratación pública dividida en lotes para facilitar el acceso directo de las pymes.",
    "Ampliar el Programa Auto+ priorizando la fabricación en la UE y ayudas plurianuales a la compra de camiones de cero emisiones.",
    "Defender ante la UE el clúster químico de Tarragona como proyecto estratégico.",
    "Fondo estatal para municipios propietarios forestales para la gestión de bosques y la prevención de incendios.",
    "Programa de inversión pública en baterías, paneles solares, eólica, bombas de calor y reciclaje de materias primas críticas."
   ]
  },
  "igualdad": {
   "breve": "Ley de violencia machista con violencia económica, vicaria y digital, identidades no binarias reconocidas y permiso por duelo gestacional.",
   "clave": [
    "Reformar la Ley Orgánica 1/2004 para incluir las violencias machistas económica, vicaria y digital, con una regulación específica de la violencia vicaria.",
    "Reconocer legalmente las identidades no binarias en el Registro Civil y la documentación, sin requisitos patologizantes.",
    "Reforzar la prohibición de las terapias de conversión, también por motivos religiosos, y tipificar penalmente los casos graves o coercitivos.",
    "Permiso retribuido por duelo gestacional entre la sexta semana y el día 179 de gestación, y protección igual para ambos progenitores desde el día 180.",
    "Equiparar los derechos fiscales, sociales y laborales de las familias monoparentales a los de las familias numerosas."
   ],
   "mas": [
    "Garantías normativas y presupuestarias para la continuidad de las políticas feministas y persecución de los discursos que niegan la violencia machista, especialmente en redes.",
    "Reformar la legislación civil para eliminar discriminaciones en la filiación de familias de dos madres y de personas trans y no binarias.",
    "Ley estatal de memoria y reparación LGTBI+, incluidas las mujeres sometidas al Patronato de Protección a la Mujer.",
    "Obligar a identificar las imágenes corporales retocadas en publicidad y redes sociales y regular los anuncios que fomenten trastornos alimentarios.",
    "Ampliar los permisos parentales retribuidos para la crianza.",
    "Reconocer la violencia contra animales de compañía como forma de violencia vicaria dentro de la violencia de género.",
    "Igual protección legal para todos los perros, incluidos los de caza, y endurecer las penas por maltrato animal.",
    "Obligar a las plataformas a prevenir prácticas adictivas o manipuladoras y a proteger por diseño a niños y adolescentes.",
    "Legislación sobre inteligencia artificial transparente y auditable, con derecho a cuestionar decisiones automatizadas, defensa del cifrado y rechazo de la vigilancia masiva."
   ]
  },
  "seguridad": {
   "breve": "Derogación de la «ley mordaza», Mossos d'Esquadra con competencias en puertos y aeropuertos y más jueces para Cataluña.",
   "clave": [
    "Derogar la Ley Orgánica 4/2015 de Seguridad Ciudadana («ley mordaza») y, mientras tanto, no aplicarla en territorios con competencias de seguridad transferidas.",
    "Suprimir del Código Penal los delitos de ofensa a los sentimientos religiosos y de injurias y calumnias a la Corona y a las asambleas legislativas.",
    "Mossos d'Esquadra como policía integral también en puertos y aeropuertos, con acceso a bases de datos estatales y plena integración en Interpol y Europol.",
    "Incorporar 180 plazas de jueces en Cataluña entre 2026 y 2027 para agilizar los procedimientos, especialmente los de reincidencia.",
    "Endurecer las penas por tenencia y uso ilícito de armas de fuego, posesión de armas blancas prohibidas y robo de cable."
   ],
   "mas": [
    "Ley estatal de desaparición forzada de menores que garantice investigación, acceso a archivos, pruebas de ADN y apoyo a las víctimas.",
    "Reconocer a las víctimas del servicio militar obligatorio (1976-2001), desclasificar archivos y establecer reparación.",
    "Finalizar la auditoría de bienes expoliados por el franquismo a entidades y asociaciones prevista en la Ley de Memoria Democrática.",
    "Traspasar a la Generalitat la comisaría de Via Laietana 43 de Barcelona para convertirla en centro de memoria.",
    "Traspasar a Cataluña las competencias en tráfico y seguridad vial, incluidos permisos de conducir, límites de velocidad y puntos del carné.",
    "Flexibilizar la prestación conjunta de servicios de policía local entre municipios, eliminando el límite de población.",
    "Revisar toda la normativa que restringe los derechos de protesta, movilización y libertad de expresión."
   ]
  },
  "exterior": {
   "breve": "Embargo completo de armas a Israel, suspensión del acuerdo UE-Israel, autonomía estratégica europea y ayuda a Ucrania con impulso diplomático.",
   "clave": [
    "Embargo completo de armas a Israel y suspensión del acuerdo de asociación UE-Israel, con apoyo a la Corte Internacional de Justicia y a la Corte Penal Internacional.",
    "Revertir la posición de 2022 sobre el Sáhara Occidental, acatar las sentencias del TJUE que anulan los acuerdos UE-Marruecos y condicionar la relación con Marruecos.",
    "Mantener la ayuda a Ucrania desde la UE ante la agresión rusa, fomentando la vía diplomática.",
    "Cumplir el 0,7 % de Ayuda Oficial al Desarrollo, con un porcentaje vinculante canalizado mediante cooperación descentralizada y feminista.",
    "Autonomía estratégica de la UE con una estrategia de seguridad propia, autónoma de la OTAN y basada en la diplomacia."
   ],
   "mas": [
    "Fiscalizar el Ministerio de Defensa y los programas especiales de armamento, evitar la ocultación de gasto y no adjudicar contratos a empresas condenadas por corrupción.",
    "Impulsar la ratificación del Segundo Protocolo contra la pena de muerte del Pacto Internacional de Derechos Civiles y Políticos.",
    "Participación de la Generalitat en la negociación de tratados de Naciones Unidas en sus ámbitos de competencia.",
    "Presupuesto europeo ambicioso y descentralizado en el Marco Financiero Plurianual, sin recentralizar programas gestionados por autoridades territoriales.",
    "Acceso directo de la Agencia Catalana de Cooperación a los fondos europeos de cooperación delegada y reforma de la AECID.",
    "Mantener el apoyo al reconocimiento del Estado de Palestina y exigir respeto a su soberanía en el marco de la solución de dos Estados."
   ]
  },
  "estado": {
   "breve": "Negociar un referéndum de autodeterminación con mediación de la UE y del Consejo de Europa y condonación de la deuda del FLA.",
   "clave": [
    "Negociar un referéndum de autodeterminación en Cataluña con la UE y el Consejo de Europa como facilitadores, según la resolución Cilevičs y la Comisión de Venecia.",
    "Nuevo modelo de financiación en el que Cataluña recaude sus impuestos, con ordinalidad y unos 4.700 M€ anuales adicionales, según el acuerdo de enero de 2026.",
    "Condonar más de 17.100 M€ de deuda del FLA de la Generalitat, con un ahorro de unos 1.500 M€ anuales en intereses.",
    "Traspasar a la Agencia Tributaria de Cataluña la recaudación del IRPF y de todos los impuestos generados en Cataluña.",
    "Ley del plurilingüismo: relación con cualquier institución del Estado en cualquier lengua oficial y exigencia de conocerla a los funcionarios estatales en cada territorio."
   ],
   "mas": [
    "Reclamar la oficialidad del catalán, el occitano y la lengua de signos catalana en la UE.",
    "Derogar el artículo 145 de la Constitución para permitir la cooperación entre Cataluña, la Comunitat Valenciana y Baleares, y reconocer «catalán» y «valenciano» como sinónimos.",
    "Fiscalizar a la Corona e impulsar iniciativas para poner fin a la monarquía, que el documento califica de «contraria al principio democrático».",
    "Oficialidad internacional de las selecciones deportivas catalanas y supresión de la obligación de jugar con la selección española bajo sanción.",
    "Crear un Consejo de Justicia de Cataluña como órgano desconcentrado del CGPJ con sede en Barcelona.",
    "Traspasar a la Generalitat la Inspección de Trabajo y el pago de las prestaciones por desempleo a través del SOC.",
    "Traspasar los aeropuertos de Girona, Reus y Sabadell, órgano bilateral sobre El Prat y Consorcio de Inversiones paritario para ejecutar la inversión estatal.",
    "Cuotas audiovisuales: el 50 % de las obras europeas emitidas en lenguas oficiales del Estado o de las comunidades y el 25 % de ellas en TVE en lenguas distintas del castellano.",
    "Voto a partir de los 16 años y una ley electoral europea sin umbrales ni circunscripciones que perjudiquen a las minorías nacionales.",
    "Derogar la LRSAL, permitir a los ayuntamientos endeudarse para invertir hasta el 50 % de sus ingresos corrientes y que todos participen en el IRPF y el IVA."
   ]
  }
 }
},
{
 "id": "junts",
 "name": "Junts",
 "nombre": "Junts per Catalunya",
 "ambito": "Cataluña",
 "doc": "Programa electoral 29N: «Catalunya al centre»",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "90 páginas",
 "idioma": "Catalán",
 "estructura": [
  "Introducción y rendición de cuentas de la legislatura",
  "Bloque I. Los derechos y las libertades en el centro",
  "Bloque II. El bienestar de los catalanes en el centro",
  "Bloque III. Las estructuras y el modelo productivo en el centro",
  "Anexo. Principales iniciativas de la legislatura"
 ],
 "resumen": "Programa centrado en «poner Cataluña en el centro»: Junts declara que no formará parte de ningún gobierno español y orienta su acción en el Congreso y el Senado a proteger el autogobierno y ganar competencias mientras Cataluña no sea independiente. Cada capítulo distingue competencias «a proteger» y «a reclamar» y concreta medidas. Sus ejes principales son el concierto económico, la delegación de las competencias de inmigración, la protección del catalán, las rebajas fiscales a familias, autónomos y pymes, más oferta de vivienda con seguridad jurídica para los propietarios y el traspaso de Rodalies y del aeropuerto de El Prat.",
 "esencial": [
  "Concierto económico catalán y ampliación del autogobierno, sin formar parte de ningún gobierno español.",
  "Delegación de las competencias de inmigración en la Generalitat y control de fronteras por los Mossos.",
  "Protección del catalán en la escuela, la Administración y la justicia.",
  "Rebajas fiscales para familias, autónomos y pymes, incluida la reducción del IRPF y del IVA.",
  "Medidas de vivienda: seguridad jurídica para propietarios, desalojos más rápidos y más oferta de alquiler asequible.",
  "Traspaso de Rodalies y del aeropuerto de El Prat a la Generalitat."
 ],
 "pdf": "pdf/junts.pdf",
 "pdfMB": "1,4 MB",
 "ejes": {
  "E1": {
   "p": 1.5,
   "e": "Elimina sucesiones y donaciones, deflacta el IRPF y rebaja sus primeros tramos, baja sociedades a pymes y numerosos tipos de IVA (pp. 58, 68-69); en el anexo se atribuye haber frenado el impuesto a las energéticas (p. 88)."
  },
  "E2": {
   "p": 0.5,
   "e": "Rechaza los topes de alquiler y propone derogar la contención de precios de la Ley 12/2023, con deducciones y rebaja del IVA a la compra (pp. 16-17, 60); a la vez prohíbe hasta 2028 la compra de vivienda por fondos y amplía el parque público con SAREB y Casa 47 (pp. 17-18)."
  },
  "E3": {
   "p": 0.5,
   "e": "Amplía el límite de horas extra, bonifica cuotas de jóvenes, plan contra el absentismo y se opone a la jornada de 37,5 h (pp. 61, 70, 88); a la vez pide un salario mínimo catalán hacia el 60 % del salario medio (p. 70)."
  },
  "E4": null,
  "E5": {
   "p": 1,
   "e": "Defiende la red concertada con los mismos recursos que la pública, el modelo sanitario catalán de colaboración público-social y la colaboración de las mutuas con la sanidad pública (pp. 51, 53-54, 70)."
  },
  "E6": {
   "p": -0.5,
   "e": "Pide más gasto (8 % del PIB en sanidad, 6 % en educación, 0,6 % en universidades), flexibilizar la regla de gasto y la LOEPSF para los ayuntamientos y condonar la deuda del FLA (pp. 51, 53-54, 68, 83)."
  },
  "E7": {
   "p": 0.5,
   "e": "Rechaza los topes de precios del alquiler (p. 16), pero pide aplicación estricta de la Ley de la Cadena Alimentaria para que los precios en origen cubran costes (p. 75)."
  },
  "E8": {
   "p": -0.5,
   "e": "Revalorización por el IPC catalán, mínimas hasta 1.400 € y jubilación anticipada sin penalización con 40 años cotizados (pp. 57-58); también propone fomentar planes complementarios y de empresa (p. 57)."
  },
  "S1": {
   "p": 1,
   "e": "«Limitar y controlar los flujos desordenados», contra las regularizaciones masivas, catalán para arraigo y renovación, prohibición del burka y el niqab y padrón restrictivo (pp. 47-49, 84); prioriza las vías legales y protege a extutelados y víctimas de trata (pp. 48-49)."
  },
  "S2": null,
  "S3": {
   "p": -1,
   "e": "Tipificar como delito las terapias de conversión con penas más altas, defender el matrimonio igualitario y oponerse a derogar o recortar la Ley 4/2023 trans (p. 36)."
  },
  "S4": {
   "p": 0,
   "e": "Deroga la Ley de Seguridad Ciudadana y la prisión permanente revisable y limita balas de goma (pp. 14-15), pero impulsa la ley de multirreincidencia, desalojos de ocupaciones en 48 h y 26.800 Mossos (pp. 15, 17, 49)."
  },
  "S5": {
   "p": -1,
   "e": "Suprimir el delito de injurias, restringir el enaltecimiento del terrorismo y reformar los delitos de odio para que no criminalicen ideas, religiones o instituciones (p. 13)."
  },
  "S6": {
   "p": -1,
   "e": "Reforzar la protección de las víctimas de violencia machista, la prueba preconstituida y nuevas figuras de violencia digital, desde un «feminismo que abra oportunidades» (pp. 32-34)."
  },
  "S7": null,
  "S8": {
   "p": -0.5,
   "e": "Memorial Democrático en Via Laietana 43, ley de reparación de víctimas LGTBI de la dictadura, anular las órdenes franquistas de disolución de federaciones y derogar la «ley franquista» de secretos oficiales (pp. 13, 15, 36, 64)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Propone desalojos más rápidos de «ocupaciones ilegales», deducciones por alquiler y cesión de viviendas de SAREB a la Generalitat.",
   "clave": [
    "Desalojar las «ocupaciones ilegales» en un máximo de 48 horas mediante juicio inmediato y permitir a la policía el desalojo inmediato cuando se detecten en flagrancia, con atención pública a las personas vulnerables.",
    "Que la Administración pague al pequeño propietario, con fondos del Estado y en un máximo de dos meses, la deuda de los inquilinos vulnerables que no puedan pagar el alquiler.",
    "Recuperar las deducciones del 15 % en el IRPF por alquiler, por cuota hipotecaria y por cuenta vivienda, y bajar del 10 % al 5 % el IVA de la vivienda nueva para residencia habitual.",
    "Prohibir hasta 2028 que las entidades financieras y sus inmobiliarias, los fondos de inversión y las gestoras de activos compren viviendas.",
    "Cesión sin coste a la Generalitat y a los ayuntamientos de todas las viviendas y el suelo de la SAREB y Casa 47 en Cataluña, y del suelo estatal apto, para alquiler asequible."
   ],
   "mas": [
    "Derogar los artículos de la Ley de Vivienda 12/2023 que invaden la competencia catalana, empezando por los de contención de precios y zonas tensionadas.",
    "Permitir al juez suspender caso a caso el desahucio de personas vulnerables sin alternativa cuando lo pide un fondo que compró la vivienda en bloque o con descuento, con compensación estatal.",
    "Reconocer el derecho del hipotecado a cancelar el préstamo por el mismo precio que pagó el fondo cuando el banco se lo vendió con descuento.",
    "Exigir que el Estado destine a vivienda recursos equiparables a la media europea y transfiera a la Generalitat la parte proporcional, para empezar a cubrir las más de 140.000 viviendas que faltan.",
    "Mantener y ampliar las líneas de avales del Estado para alquiler social o asequible, hasta 2.000 M€, y para construcción industrializada, hasta 280 M€.",
    "Aval para la entrada de la primera vivienda de los menores de 35 años gestionado por la Generalitat, y convertir el Bono Joven en una renta de emancipación adaptada a los precios catalanes.",
    "Eximir del IRPF la ganancia patrimonial cuando padres o abuelos donan una vivienda a hijos o nietos para que sea su residencia habitual.",
    "Ampliar la línea de avales contra el impago del alquiler para jóvenes y familias con dificultades económicas, con financiación estatal y gestión íntegra de la Generalitat.",
    "Condicionar los beneficios fiscales de las SOCIMI a la promoción efectiva de vivienda de alquiler asequible.",
    "Aplicar un IVA del 10 % a las obras de renovación de viviendas destinadas a alquiler habitual y hacer permanente la exención en el IRPF por vender viviendas vacías a las administraciones."
   ]
  },
  "empleo": {
   "breve": "Propone un salario mínimo catalán, ampliar las horas extraordinarias, bonificaciones a jóvenes y el traspaso del desempleo.",
   "clave": [
    "Capacidad para fijar un salario mínimo catalán que avance progresivamente hacia el 60 % del salario medio catalán, con diálogo social y medidas de acompañamiento a las pequeñas empresas.",
    "Ampliar el límite de horas extraordinarias, voluntarias, registradas y remuneradas, y mejorar su tratamiento fiscal para que se traduzcan en más salario neto.",
    "Ampliar a todos los menores de 35 años o recién titulados las bonificaciones de cuotas empresariales por contratación indefinida, y cuota cero de autónomos hasta los 35 años durante tres años.",
    "Traspasar a Cataluña la gestión de las prestaciones por desempleo, integrada con el Servicio de Empleo de Cataluña, y aprobar un Estatuto del Trabajador de Cataluña."
   ],
   "mas": [
    "Frenar las subidas de cuotas de los autónomos, adecuar la cotización a los rendimientos reales y elevar a 5.000 € el límite de gastos de difícil justificación.",
    "Equiparar la protección social de los autónomos a la de los asalariados en cese de actividad, enfermedad y conciliación.",
    "Plan contra el absentismo laboral que combine prevención, mejor gestión de las bajas y control del fraude, y más colaboración de las mutuas con la sanidad pública.",
    "Modificar la normativa de 1957 sobre trabajo de menores para que los jóvenes de 16 y 17 años puedan aprender un oficio, y recuperar la figura del aprendiz.",
    "Estatuto del becario que garantice una remuneración digna a todos los estudiantes en prácticas, respetando las competencias catalanas en universidades y formación profesional.",
    "Reformar el contrato de relevo para rejuvenecer las plantillas y facilitar el acceso de los jóvenes al empleo y las jubilaciones parciales.",
    "Igualdad salarial con transparencia retributiva y auditorías, y derecho a adaptar la jornada y a la flexibilidad horaria para atender a la familia sin perjudicar la carrera.",
    "Abrir la negociación colectiva del empleo público a los sindicatos con al menos el 10 % de representación y eliminar la tasa de reposición en los servicios públicos esenciales.",
    "Estabilizar como personal fijo a extinguir, en un plazo de tres meses, a los empleados públicos temporales en situación de abuso de temporalidad.",
    "Permitir la prolongación voluntaria del servicio activo de los funcionarios hasta los 72 años y reformar las oposiciones estatales para acortar sus plazos."
   ]
  },
  "impuestos": {
   "breve": "Plantea el concierto económico catalán, rebajas del IRPF, supresión de sucesiones y reducciones del IVA en energía y servicios.",
   "clave": [
    "Concierto económico catalán fuera del régimen común de la LOFCA: la Agencia Tributaria de Cataluña recaudaría, gestionaría e inspeccionaría todos los tributos generados en Cataluña.",
    "Deflactar anualmente el IRPF según la inflación, rebajar los primeros tramos y aumentar los mínimos personales y familiares.",
    "Eliminar el impuesto de sucesiones y donaciones para que el patrimonio construido a lo largo de una vida de trabajo no soporte una doble carga fiscal al transmitirse.",
    "IRPF para menores de 35 años en el tramo estatal, con límite de renta: exención total el primer año de actividad laboral, reducción del 75 % el segundo y del 50 % el tercero.",
    "Condonar el 100 % de la deuda de la Generalitat con el Fondo de Liquidez Autonómico (FLA) y publicar cada año las balanzas fiscales."
   ],
   "mas": [
    "Acelerar la rebaja del impuesto de sociedades para pymes, microempresas y cooperativas y ampliar la libertad de amortización de las inversiones productivas.",
    "IVA franquiciado voluntario para autónomos y pequeñas empresas que facturen hasta 85.000 € al año, e ingreso del IVA al cobrar la factura para quienes facturen menos de 2 M€.",
    "Reducir al 10 % el IVA de la luz y el gas natural, trasladando la rebaja a la factura, y del 21 % al 10 % el de los servicios de peluquería.",
    "Bajar al 10 % el IVA de los servicios funerarios y al 4 % el de teleasistencia, ayuda a domicilio, centros de día y atención residencial.",
    "Elevar a 2 M€ la exención del IAE, compensando a los ayuntamientos, y tipo del 0 % en el impuesto sobre el valor de la producción eléctrica cuando no haya déficit de tarifa.",
    "Permitir recurrir las deudas y sanciones de Hacienda sin pagarlas por adelantado ni aportar avales hasta que haya resolución firme.",
    "Reformar la Ley de Estabilidad Presupuestaria para que los ayuntamientos puedan destinar siempre sus remanentes y superávits a inversiones, vivienda y servicios, y no solo a amortizar deuda.",
    "Que el Estado compense íntegra e inmediatamente a la Generalitat por lo que deje de ingresar por las rebajas fiscales en vivienda que afectan al tramo catalán del IRPF y al IVA.",
    "Plan calendarizado de reducción del IVA cultural, equiparar el IVA de las galerías de arte al europeo y eliminar la tasa de exportación de obras de arte.",
    "Rebajar el IVA de los gastos veterinarios e introducir una deducción estatal en el IRPF por esos gastos."
   ]
  },
  "pensiones": {
   "breve": "Propone revalorizar las pensiones con el IPC catalán, subir las mínimas y traspasar la Seguridad Social a Cataluña.",
   "clave": [
    "Revalorizar cada año las pensiones según el IPC catalán y subir las mínimas y de viudedad por encima de él hasta igualarlas al salario mínimo catalán (1.400 € en 14 pagas).",
    "Eliminar con carácter retroactivo las penalizaciones por jubilación anticipada a quienes tengan 40 años o más cotizados.",
    "Traspasar a Cataluña la gestión de la Seguridad Social y crear una Agencia Catalana de Protección Social como base de un sistema propio que garantice derechos y pensiones.",
    "Garantizar en los presupuestos estatales una aportación del Estado equivalente al 50 % del gasto total en dependencia certificado por cada comunidad autónoma."
   ],
   "mas": [
    "Reconocer como periodo cotizado el tiempo dedicado a cuidar a familiares dependientes para que cuidar, tarea que hacen mayoritariamente mujeres, no suponga una pensión más baja.",
    "Fomentar desde las instituciones planes de ahorro y de pensiones complementarios o de empresa y modelos de previsión social adaptados a la realidad catalana.",
    "IRPF específico para las pensiones contributivas, con más mínimos personales y deducciones por ayuda a domicilio, centros de día, residencias y mutuas médicas.",
    "Consolidar la gestión catalana del ingreso mínimo vital, simplificar sus trámites y coordinarlo con la renta garantizada de ciudadanía para evitar duplicidades.",
    "Equiparar las familias monoparentales a las numerosas en IRPF, Seguridad Social, permisos, bonificaciones y tasas estatales, reconociendo en todo el Estado el título de la Generalitat.",
    "Copago progresivo de los servicios de apoyo a la discapacidad según la capacidad económica, con exención para ingresos que no superen 2,5 veces el IPREM.",
    "Fondo estatal estable, gestionado por la Generalitat, para la emancipación de los jóvenes extutelados y sin apoyo familiar a partir de los 18 años.",
    "Revisar los mínimos y deducciones por hijos, discapacidad y dependencia y estudiar mecanismos reembolsables para que el apoyo llegue también a las rentas bajas.",
    "Financiar con fondos estatales el transporte público gratuito para personas mayores que decidan Cataluña y sus ayuntamientos, y garantizar por ley su atención presencial.",
    "Endurecer las penas por estafas a personas mayores y obligar a las entidades bancarias a ofrecerles atención presencial y en catalán."
   ]
  },
  "sanidad": {
   "breve": "Propone financiación plurianual hacia el 8 % del PIB, traspaso de hospitales estatales y formación sanitaria especializada a la Generalitat.",
   "clave": [
    "Financiación sanitaria plurianual para avanzar hacia el 8 % del PIB en gasto sanitario público y destinar el 25 % del presupuesto de salud a la atención primaria.",
    "Eliminar el distrito universitario único y traspasar a Cataluña la formación sanitaria especializada, con más plazas MIR, en especial de Medicina Familiar y Comunitaria.",
    "Defender el modelo sanitario catalán de colaboración público-social y no apoyar ninguna medida estatal uniformizadora de los servicios sanitarios que no lo respete.",
    "Traspasar a la Generalitat la titularidad de los hospitales estatales que ya gestiona, como Vall d'Hebron, Bellvitge, Arnau de Vilanova, Josep Trueta y Joan XXIII."
   ],
   "mas": [
    "Clasificar a las enfermeras en el grupo A1, a los técnicos superiores en el grupo B y a los técnicos en cuidados auxiliares de enfermería en el C1.",
    "Competencia para homologar desde Cataluña los títulos de especialistas extracomunitarios con un procedimiento ágil, transparente y con garantías profesionales.",
    "Incorporar con más rapidez los medicamentos aprobados en la UE, con acceso controlado a terapias aún no incluidas, por ejemplo para el alzhéimer.",
    "Priorizar la investigación en alzhéimer y enfermedades neurodegenerativas con financiación estatal estable para los centros catalanes de referencia.",
    "Incentivos a la investigación y fabricación de medicamentos, en especial antibióticos prioritarios, condicionados a producir en Europa y garantizar el suministro.",
    "Colaboración de las mutuas con la sanidad pública para agilizar pruebas diagnósticas, tratamientos y recuperación, con garantías médicas.",
    "Acceso gratuito universal a productos de higiene menstrual, anticonceptivos hormonales y preservativos hasta los 35 años, con financiación estatal transferida a la Generalitat.",
    "Financiación estatal del servicio telefónico de atención a la salud mental del CatSalut, orientado a los jóvenes.",
    "Financiación sanitaria para ampliar el Servicio Trànsit de atención a las personas trans y el acceso a la PrEP y la PEP."
   ]
  },
  "educacion": {
   "breve": "Propone el catalán como lengua vehicular, el 6 % del PIB en educación y un distrito universitario propio en Cataluña.",
   "clave": [
    "Blindar la escuela catalana con el catalán como lengua vehicular, «línea roja» del programa, y que la Generalitat sea la administración educativa única con currículo propio.",
    "Alcanzar el 6 % del PIB en educación que fija la Ley de Educación de Cataluña, con los mismos recursos para los centros públicos y los concertados.",
    "Distrito universitario propio para decidir en Cataluña el acceso a sus universidades, y traspaso íntegro de las becas para implantar progresivamente becas salario.",
    "Elevar la inversión en universidades del 0,40 % al 0,6 % del PIB en cinco años y la inversión en I+D hasta al menos la media europea."
   ],
   "mas": [
    "Actualizar los módulos de los conciertos educativos para adecuarlos a los costes reales y que el Parlament regule la naturaleza de los conciertos.",
    "Financiación pública estatal para la educación de 0 a 3 años y gratuidad universal de la enseñanza postobligatoria (16-18 años).",
    "Eliminar la tasa de reposición en las universidades y darles plena autonomía organizativa, financiera, académica y de personal.",
    "Devolver el 100 % del IVA de la investigación y añadir en la declaración del IRPF una casilla para asignar parte de los impuestos a I+D.",
    "Recursos estatales para aulas de acogida y de aceleración lingüística, más profesorado y un reparto equilibrado del alumnado recién llegado entre centros.",
    "Traspaso integral de la gestión de las becas de comedor y transporte, y capacidad para regular los umbrales y cuantías del resto de becas.",
    "Aumentar el gasto estructural en grandes infraestructuras científicas como ALBA-CELLS, el Barcelona Supercomputing Center y el Centro Nacional de Análisis Genómico.",
    "Becas remuneradas de «segunda oportunidad» para jóvenes sin empleo ni estudios, condicionadas al regreso al sistema educativo y a los resultados.",
    "Defender el currículo propio con referentes LGTBI+ y educación afectivosexual en todas las etapas y oponerse a medidas que permitan excluir de ellas al alumnado.",
    "Incluir el catalán en la plataforma OLS de apoyo lingüístico para que los universitarios hagan su movilidad internacional en su lengua."
   ]
  },
  "inmigracion": {
   "breve": "Propone delegar en la Generalitat las competencias de inmigración y que los Mossos controlen las fronteras y puertos catalanes.",
   "clave": [
    "Aprobar la ley orgánica de delegación a la Generalitat de las competencias de inmigración: permisos de residencia y trabajo, sanciones, expulsiones, devoluciones, CIE y expedición de NIE, TIE, DNI y pasaporte.",
    "Oponerse a las regularizaciones masivas por decreto y exigir el conocimiento del catalán en los procesos de arraigo y de renovación de permisos.",
    "Que los Mossos d'Esquadra asuman el control de acceso al espacio Schengen y de fronteras en puertos y aeropuertos catalanes, llegando a 26.800 agentes en 2032.",
    "Prohibir en el espacio público las prendas que cubren total o sustancialmente el rostro, como el niqab y el burka, sin afectar al hiyab.",
    "Exigir un título habilitante sobre la vivienda para empadronarse, impedir que la «ocupación ilegal» dé acceso al padrón y crear un padrón social para personas sin hogar."
   ],
   "mas": [
    "Priorizar las vías legales y la contratación en origen, con una planificación anual de las ocupaciones que necesitan empresas y sectores como el campo, la industria, los cuidados o la hostelería.",
    "Cumplir las resoluciones de retorno cuando legalmente corresponda, distinguiendo siempre al adulto sin derecho a quedarse del solicitante de asilo, la víctima de trata o el menor.",
    "Ley integral de protección y asistencia a las víctimas de trata, con identificación temprana, atención especializada y los Mossos como policía integral.",
    "Que el reparto de menores migrantes compute el esfuerzo de acogida catalán, con compensación económica, y que los extutelados en itinerario de formación, empleo y catalán no pierdan la documentación a los 18 años.",
    "Verificación sistemática y anual de la residencia efectiva en el padrón, con baja de oficio de las inscripciones sin título y doce meses para revisar las existentes.",
    "Agilizar la homologación de títulos y cualificaciones y el canje de permisos de conducir de las personas con derecho a trabajar.",
    "Reforzar la lucha contra los matrimonios forzados y la mutilación genital femenina y fijar la igualdad entre mujeres y hombres como norma común para todos.",
    "Participación vinculante de Cataluña en las decisiones estatales sobre regularizaciones, flujos y repartos que la afecten, teniendo en cuenta vivienda, escuela y servicios públicos.",
    "Atención específica en las políticas de asilo a las personas perseguidas por orientación sexual o expresión de género, y recuperar los fondos de acogida que el Estado debe a la Generalitat."
   ]
  },
  "energia": {
   "breve": "Propone revisar el cierre de las nucleares, ampliar el autoconsumo compartido y traspasar Rodalies y el aeropuerto de El Prat.",
   "clave": [
    "Revisar el calendario de cierre de las centrales nucleares catalanas para garantizar el suministro a empresas y hogares si las renovables no cubren la demanda.",
    "Ampliar de 5 a 100 km el radio del autoconsumo compartido y abrir los nudos de evacuación para que los proyectos renovables tengan acceso y conexión a la red.",
    "Traspaso inmediato e incondicional del 100 % de Rodalies y Media Distancia con vías, catenarias, estaciones y presupuestos pendientes, y plan de choque con auditorías externas.",
    "Traspasar la titularidad del aeropuerto de El Prat y del resto de aeropuertos catalanes fuera del modelo centralizado de AENA para convertir El Prat en un hub intercontinental.",
    "Alcanzar la neutralidad climática antes de 2050, reduciendo más del 55 % las emisiones de gases de efecto invernadero antes de 2030."
   ],
   "mas": [
    "Igualar en todo el Estado los peajes de acceso a la red de media tensión, acabando con los peajes más altos de la red de 25 kV frente a la de 36 kV que soportan las pymes catalanas.",
    "Recuperar la competencia para autorizar líneas eléctricas de transporte de 220 y 400 kV y proyectos de generación de cualquier potencia que no salgan de Cataluña.",
    "Exigir el cumplimiento del calendario del Corredor Mediterráneo como vía independiente de ancho europeo fuera de los núcleos urbanos, no como tercer carril sobre la línea convencional.",
    "Traspaso integral de la red de carreteras estatales en Cataluña, incluidas autopistas y nacionales, con los recursos para su gestión y mantenimiento.",
    "Electrificación masiva de la movilidad, con recarga rápida y ultrarrápida en los grandes ejes viarios, ayudas a la compra y reconversión de la industria del automóvil.",
    "Bonificaciones fiscales para hogares y pymes que instalen placas solares y otros sistemas de autoconsumo, e impulso de las comunidades energéticas.",
    "Traspasar a la Generalitat la gestión de la parte catalana de la cuenca del Ebro y ampliar las plantas de desalinización y regeneración de agua.",
    "Renovar las redes municipales de agua para reducir las pérdidas por debajo del 10 % y modernizar los canales de riego como infraestructura de país.",
    "Implantar un sistema de depósito, devolución y retorno de envases, la recogida selectiva del textil y la digestión anaerobia de residuos orgánicos.",
    "Condicionar las autorizaciones de nuevos centros de datos a la planificación territorial catalana, a energía 100 % renovable y a circuitos hídricos cerrados."
   ]
  },
  "economia": {
   "breve": "Propone cláusulas espejo en los acuerdos comerciales y el traspaso del Consorcio de la Zona Franca a Cataluña.",
   "clave": [
    "Crear un gasóleo profesional agrario con fiscalidad reducida en origen y, mientras no llegue, rebajar de forma urgente los impuestos sobre los carburantes agrícolas.",
    "Establecer que la normativa estatal no pueda imponer a los productores agrarios, también en fitosanitarios, requisitos más exigentes que los fijados por la UE.",
    "Incluir cláusulas espejo en los acuerdos comerciales, como UE-Mercosur, para que los productos importados cumplan las mismas exigencias ambientales, sanitarias y laborales que los europeos.",
    "Traspaso del Consorcio de la Zona Franca y creación de una autoridad única con el Puerto de Barcelona para reforzar a Cataluña como nodo logístico del Mediterráneo.",
    "Avanzar hacia una inversión total en I+D del 3 % del PIB, con refuerzo de los centros tecnológicos y adopción de IA, automatización y robótica en las empresas."
   ],
   "mas": [
    "Aplicación estricta de la Ley de la Cadena Alimentaria para que los precios en origen cubran los costes reales de producción, y trazabilidad del campo a la mesa.",
    "Que las ayudas públicas agrarias tributen como indemnizaciones y no como ingresos ordinarios, y revisar el régimen de módulos para reflejar los costes reales.",
    "Exención del IBI para las infraestructuras hidráulicas de las comunidades de regantes e IVA reducido en las obras de modernización de regadíos.",
    "Nueva línea de Agroseguro con mejores franquicias y criterios de afectación, peritajes más cortos y coberturas ajustadas al aumento de costes.",
    "Exención fiscal para quien transmita o arriende fincas rústicas a jóvenes o agricultores profesionales, y ayudas a la incorporación de jóvenes exentas de tributar.",
    "Permitir el uso de drones, agricultura de precisión y nuevas técnicas genómicas en las mismas condiciones que en el resto de la UE.",
    "Proteger la vivienda habitual de los autónomos ante las deudas de la actividad y mejorar la segunda oportunidad, incluida la exoneración de deudas con Hacienda y la Seguridad Social.",
    "Combatir la morosidad pública y privada con un régimen de control y sanciones y facilitar el acceso de pymes y autónomos a la contratación pública mediante lotes.",
    "Beneficios en el impuesto de sociedades para que los jóvenes compren negocios viables que cierran por jubilación, condicionados a mantener la actividad y el empleo.",
    "Programa de rehabilitación de vivienda rural para contribuir al 30 % del parque rehabilitado en una década, y fibra óptica en todos los núcleos de más de 50 habitantes."
   ]
  },
  "igualdad": {
   "breve": "Propone tipificar como delito las terapias de conversión y permisos de cuidado retribuidos, y no recortar la ley trans.",
   "clave": [
    "Aprobar la ley orgánica que tipifica como delito las terapias de conversión, caducada con la disolución de las Cortes, con penas más altas y ayudas a las víctimas.",
    "Votar en contra de cualquier iniciativa que cuestione el matrimonio entre personas del mismo sexo y oponerse a derogar o recortar la Ley 4/2023 (trans y LGTBI) y la Ley 15/2022 de igualdad de trato.",
    "Cerrar los vacíos legales ante las imágenes íntimas manipuladas con IA y la suplantación de identidad para acosar sexualmente, con retirada rápida de esos contenidos por las plataformas.",
    "Permisos individuales, retribuidos y corresponsables para cuidar de hijos y dependientes; en familias monoparentales, que el menor no tenga menos tiempo de cuidado."
   ],
   "mas": [
    "Que la declaración de la víctima de violencia machista pueda hacerse como prueba preconstituida para evitar su revictimización, con atención judicial especializada.",
    "Simplificar los trámites para que las víctimas de violencia machista cobren de forma efectiva las prestaciones e indemnizaciones que ya tienen reconocidas.",
    "Auditar los sistemas de inteligencia artificial usados en selección de personal, acceso a servicios o decisiones que afectan a derechos para corregir sesgos por razón de sexo.",
    "Incentivos fiscales y financiación para emprendedoras y para las empresas, sobre todo pymes, que apliquen políticas reales de conciliación y corresponsabilidad.",
    "Volver a registrar y aprobar la Ley de Memoria y Justicia para la reparación de las personas trans y LGTBI víctimas de la dictadura.",
    "Transferir íntegramente a la Generalitat el 0,7 % del IRPF para fines sociales, cumpliendo las sentencias, para que puedan recibirlo también las entidades LGTBI+ catalanas.",
    "Derogar la declaración de la tauromaquia como patrimonio cultural y prohibir el transporte marítimo internacional de animales vivos para consumo o ganadería.",
    "Permiso retribuido en el Estatuto de los Trabajadores por enfermedad grave, hospitalización o muerte de un animal de la familia, y revisar las penas por maltrato animal.",
    "Reformar la LOREG para que las personas ciegas voten de forma autónoma y secreta, y plan estatal con calendario y presupuesto para la accesibilidad de estaciones y trenes.",
    "Obligar a las grandes plataformas a auditorías algorítmicas, a verificar la edad respetando la privacidad y a prevenir diseños adictivos que afectan a la salud mental de los menores."
   ]
  },
  "seguridad": {
   "breve": "Propone derogar la «ley mordaza», dar plenas competencias a los Mossos y suprimir la Audiencia Nacional.",
   "clave": [
    "Garantizar la aplicación efectiva de la Ley Orgánica 1/2026 contra la multirreincidencia, con más medios judiciales y acción penal de los ayuntamientos en los casos de hurto.",
    "Derogar la Ley de Seguridad Ciudadana («ley mordaza»), prohibir o limitar las balas de goma y regular los registros policiales de datos sobre actividad política o social.",
    "Suprimir la Audiencia Nacional, redistribuyendo sus competencias, y consolidar el Tribunal Superior de Justicia de Cataluña como última instancia judicial en Cataluña.",
    "Derogar la prisión permanente revisable y reformar los delitos de terrorismo, desórdenes públicos, malversación y rebelión para adecuarlos a los estándares europeos.",
    "Suprimir el delito de injurias, restringir el de enaltecimiento del terrorismo y reformar los delitos de odio para que no criminalicen ideas, religiones o instituciones."
   ],
   "mas": [
    "Modelo Nacional de Seguridad propio: plenas competencias de los Mossos como policía integral y traspaso del control de armas y explosivos que hoy ejerce la Guardia Civil.",
    "Ley contra las ocupaciones ilegales con medidas cautelares y procedimientos ágiles, y que los ayuntamientos puedan instar el desalojo cuando el propietario no lo haga.",
    "Reformar el acceso a la carrera judicial según el modelo alemán, eliminando las oposiciones memorísticas, y suprimir el aforamiento y las puertas giratorias entre judicatura y política.",
    "Que los vocales del CGPJ cesen efectivamente al acabar su mandato y establecer criterios técnicos para todos los nombramientos judiciales.",
    "Reformar la Ley Orgánica del Tribunal Constitucional para revertir las reformas de 2015, eliminando el recurso previo sobre estatutos y su capacidad coercitiva.",
    "Derogar la «ley franquista» de secretos oficiales y aprobar una nueva con plazos estrictos de desclasificación y acceso a información sobre corrupción.",
    "Exigir el catalán como requisito para jueces, fiscales y letrados que ejerzan en Cataluña y reconocer la validez de las actuaciones en catalán en todo el Estado.",
    "Crear el Consejo de Justicia de Cataluña y traspasar el personal de justicia, incluidos letrados, médicos forenses y el Instituto Nacional de Toxicología de Barcelona.",
    "Regular las infiltraciones policiales fuera de los supuestos legales y limitar la facultad de disolver manifestaciones, con responsabilidad estrictamente individual de los participantes.",
    "Derogar el artículo 384 bis de la LECrim, que permite suspender a cargos públicos procesados por rebelión o terrorismo en prisión provisional."
   ]
  },
  "exterior": {
   "breve": "Propone una Cataluña independiente en la UE y la OTAN, apoyo a Ucrania y oficialidad del catalán en la Unión Europea.",
   "clave": [
    "Compromiso plurianual de apoyo humanitario, financiero y militar a Ucrania con control parlamentario, aplicación de las sanciones a Rusia y apoyo a su adhesión a la UE.",
    "Una Cataluña independiente miembro de la UE y de la OTAN, y una defensa europea más integrada y complementaria de la OTAN, con capacidades y control democrático.",
    "Paz entre israelíes y palestinos basada en dos estados, defensa del derecho de Israel a existir y defenderse dentro del derecho internacional y condena de Hamás y Hezbolá.",
    "Retorno industrial en Cataluña de las inversiones estatales en defensa al menos proporcional a su peso en el PIB, con transparencia sobre el reparto territorial de contratos.",
    "Seguir presionando diplomáticamente hasta lograr la oficialidad plena y efectiva del catalán en la Unión Europea, con recursos para su uso institucional."
   ],
   "mas": [
    "Exigir el cumplimiento del compromiso estatal de destinar el 0,7 % de la renta nacional bruta a ayuda oficial al desarrollo en 2030, con recursos para la cooperación catalana.",
    "Recursos para combatir el antisemitismo y proteger a las comunidades judías, rechazar los boicots indiscriminados por origen y combatir igualmente el odio antimusulmán.",
    "Defender en los acuerdos comerciales europeos la apertura de mercados, la reciprocidad y las garantías sociales y ambientales, con intervención previa de la Generalitat y los sectores afectados.",
    "Participación estable de la Generalitat en las delegaciones estatales ante el Consejo de la UE y en la negociación de los tratados que le afecten.",
    "Que la Generalitat se siente en el Consejo de Seguridad Nacional y sus comités cuando se traten cuestiones que afecten a Cataluña.",
    "Transferencia estable a ACCIÓ de los recursos estatales de internacionalización empresarial según el peso exportador de Cataluña.",
    "Reforma europea que refuerce el Parlamento Europeo, la subsidiariedad y la protección de minorías nacionales y lingüísticas, y amplíe el voto por mayoría cualificada.",
    "Mejorar el voto exterior con más puntos y medios de votación, mejores plazos y seguimiento de la documentación, con garantías de secreto.",
    "Apoyo a Barcelona como capital euromediterránea y relaciones científicas y económicas con democracias innovadoras, incluido Israel.",
    "Preparar técnicamente la transición internacional hacia la independencia: capacidades diplomáticas y consulares, continuidad de obligaciones internacionales y estrategia de reconocimientos."
   ]
  },
  "estado": {
   "breve": "Propone garantizar el derecho de Cataluña a la autodeterminación, exigir el catalán en la Administración del Estado y reformar la LOREG.",
   "clave": [
    "Garantizar el derecho de Cataluña a la autodeterminación por todos los medios democráticos; un referéndum acordado con el Estado debe ofrecer la misma opción que el del 1 de octubre de 2017.",
    "Reforma de la LOREG: eliminar la circunscripción única en las europeas, la inelegibilidad sobrevenida sin condena firme y la obligación de jurar o prometer el cargo.",
    "Requisito estricto de conocimiento del catalán para todo el personal de la Administración General del Estado en Cataluña, incluidos judicatura y cuerpos de seguridad.",
    "Derogar la LRSAL de forma pactada con una nueva ley local y eliminar los obstáculos para que Cataluña despliegue las veguerías superando la división provincial.",
    "Impedir que la Mesa del Congreso bloquee por inconstitucionalidad, antes del debate, iniciativas sobre autodeterminación, amnistía o monarquía."
   ],
   "mas": [
    "Ley de Garantía de Atención Presencial que prohíba imponer la cita previa obligatoria en las oficinas estatales de Seguridad Social, Extranjería y Hacienda.",
    "Portal de Transparencia de las Inversiones del Estado en Cataluña, con ejecución presupuestaria regionalizada y licitaciones actualizadas cada trimestre.",
    "Reformar la Ley 39/2015 para que el silencio administrativo positivo y la declaración responsable sean la norma, y fijar por ley el principio de «una sola vez».",
    "Garantizar la independencia del CIS con un consejo rector de expertos y de los grupos parlamentarios y un registro público de las encuestas encargadas por el Gobierno.",
    "Eliminar las puertas giratorias de altos cargos hacia grandes empresas de sectores regulados y crear un registro público de lobbies con huella legislativa.",
    "Voto a los 16 años mediante una reforma de la LOREG, y que el Parlament pueda fijar la edad de voto en las elecciones catalanas.",
    "Reanudar la publicación del BOE en catalán, consolidar La 2Cat íntegramente en catalán y cuadruplicar el presupuesto del centro de RTVE en Sant Cugat.",
    "Traspasar a la Generalitat la titularidad del Archivo de la Corona de Aragón, completar el retorno de los papeles de Salamanca y frenar el traslado de las pinturas de Sijena.",
    "Exigir la cesión de la antigua jefatura de Via Laietana 43 como sede del Memorial Democrático y la apertura de archivos sobre abusos en el servicio militar obligatorio.",
    "Reconocimiento internacional de las selecciones deportivas catalanas y del Comité Olímpico de Cataluña, y libertad para exhibir banderas como la estelada en los estadios."
   ]
  }
 }
},
{
 "id": "pnv",
 "name": "PNV",
 "nombre": "Eusko Alderdi Jeltzalea-Partido Nacionalista Vasco (EAJ-PNV)",
 "ambito": "País Vasco",
 "doc": "Programa Elecciones Generales 2026 (Hauteskunde Orokorren Programa 2026). «Euskadi Zaindu. Defendemos Euskadi»",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "43 páginas",
 "idioma": "Castellano",
 "estructura": [
  "Poder construir tu vida aquí",
  "Una Euskadi que trabaja y prospera",
  "Vivir con tranquilidad y con derechos",
  "Cuidar lo que hemos conseguido",
  "Decidir aquí. Hacernos escuchar allí"
 ],
 "resumen": "Programa organizado en cinco compromisos y centrado en lo que el partido reclamará en las Cortes para Euskadi: cumplimiento del Estatuto de Gernika, transferencias pendientes, defensa del Concierto Económico y una nueva relación bilateral con el Estado basada en el reconocimiento nacional vasco. En lo económico prioriza la industria, las redes eléctricas y la rebaja de impuestos sobre la energía; en lo social, pensiones revalorizadas con el IPC, cuidados y la defensa de derechos (igualdad, LGTBIQ+, reforma de la Ley de Seguridad Ciudadana).",
 "esencial": [
  "Cumplimiento del Estatuto de Gernika y de las transferencias pendientes a Euskadi.",
  "Defensa del Concierto Económico y una nueva relación bilateral con el Estado, o «Concierto Político».",
  "Redes eléctricas, industria y rebaja del Impuesto Especial sobre la Electricidad.",
  "Pensiones revalorizadas con el IPC y medidas para el cuidado de personas dependientes.",
  "Igualdad, derechos LGTBIQ+ y reforma de la Ley de Seguridad Ciudadana.",
  "Vivienda: más oferta y seguridad jurídica para inquilinos y pequeños propietarios."
 ],
 "pdf": "pdf/pnv.pdf",
 "pdfMB": "0,5 MB",
 "ejes": {
  "E1": {
   "p": 0.5,
   "e": "Solo propone rebajas: Impuesto Especial sobre la Electricidad al 0,5 % (p. 16), estudiar IVA cero o superreducido para alimentos básicos (p. 21) y exención del IRPF a indemnizaciones del amianto (p. 34); no plantea subidas."
  },
  "E2": {
   "p": 0,
   "e": "Combina más oferta, agilizar trámites urbanísticos y seguridad a pequeños propietarios con regular alquileres de temporada y turísticos y frenar la especulación (pp. 7-8); sin control de precios."
  },
  "E3": {
   "p": -0.5,
   "e": "Salario mínimo vasco por encima del estatal, prevalencia de convenios más favorables, desempleo hasta 36 meses y más Inspección (p. 9); también análisis del absentismo con medidas de control (p. 10)."
  },
  "E4": null,
  "E5": null,
  "E6": {
   "p": -0.5,
   "e": "Revisar la normativa de estabilidad presupuestaria con reglas de gasto más flexibles y usar los superávits en inversión (p. 21)."
  },
  "E7": {
   "p": 0,
   "e": "Reducir barreras regulatorias a las pymes (p. 15) junto a reforzar la Ley de la Cadena Alimentaria para que los precios cubran costes (p. 18) y mantener la TUR del gas (p. 16)."
  },
  "E8": {
   "p": -1,
   "e": "Revalorización anual con el IPC y sin penalización con 40 años cotizados; previsión complementaria de empleo «nunca como sustitución» de la pública (p. 31)."
  },
  "S1": {
   "p": -0.5,
   "e": "Vías legales, regularización «prevista en la legislación», alternativas a los CIE y rechazo de grandes centros de acogida (pp. 25, 28), junto a «exigir el cumplimiento de las normas» y frontera norte (pp. 23-24)."
  },
  "S2": {
   "p": -1,
   "e": "Proteger el acceso a la interrupción voluntaria del embarazo con perímetros de 150 metros alrededor de las clínicas (p. 26); no menciona la eutanasia."
  },
  "S3": {
   "p": -1,
   "e": "Tipificar penalmente las terapias de conversión y desarrollar el art. 50 de la Ley 4/2023 para personas trans extranjeras (p. 27)."
  },
  "S4": {
   "p": -0.5,
   "e": "Reformar la «ley mordaza» y rechazar la prisión permanente revisable (pp. 27-28), aunque pide reformas contra la multirreincidencia (p. 24)."
  },
  "S5": {
   "p": -0.5,
   "e": "Reformar los delitos de opinión sobre la Corona, instituciones y símbolos del Estado para adecuarlos a estándares europeos (p. 27)."
  },
  "S6": {
   "p": -1,
   "e": "Cumplir el Pacto de Estado renovado en 2025, regular la violencia vicaria, formación obligatoria en género para jueces y más juzgados especializados (p. 26)."
  },
  "S7": null,
  "S8": {
   "p": -1,
   "e": "Aplicación íntegra de la Ley de Memoria Democrática, reparación a víctimas del Patronato de Protección a la Mujer y desclasificación de hechos de 1976-1980 (pp. 26, 40)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Propone agilizar los trámites urbanísticos, movilizar viviendas vacías y regular los alquileres de temporada y turísticos.",
   "clave": [
    "Agilizar los trámites urbanísticos para construir más vivienda, con plazos razonables y garantías legales, y movilizar viviendas vacías y rehabilitar edificios para aumentar la oferta.",
    "Impedir el uso fraudulento de los contratos de temporada para eludir las garantías del alquiler habitual y regular los alquileres de temporada y turísticos para que no resten vivienda residencial.",
    "Dar seguridad jurídica a inquilinos y pequeños propietarios y ofrecer alternativas habitacionales a las familias vulnerables sin trasladar toda la responsabilidad a los pequeños propietarios.",
    "Medidas específicas para que los jóvenes accedan a su primera vivienda, tanto en alquiler como en propiedad, sin que el alquiler protegido sea la única opción disponible."
   ],
   "mas": [
    "Reducir las prácticas especulativas que encarecen la vivienda y dificultan el acceso al alquiler y a la compra.",
    "Incorporar la emancipación juvenil como prioridad en las reformas estatales de vivienda, empleo, salarios y protección social, evaluando cómo afectan a la capacidad de los jóvenes para independizarse.",
    "Políticas de emancipación estables y con financiación suficiente, complementarias de las iniciativas de las instituciones vascas y respetuosas con sus competencias."
   ]
  },
  "empleo": {
   "breve": "Propone un salario mínimo vasco propio, ampliar la prestación por desempleo hasta 36 meses y reforzar la Inspección de Trabajo.",
   "clave": [
    "Reclamar la competencia plena para fijar un salario mínimo vasco propio, adaptado al coste de vida, siempre por encima del estatal y definido mediante diálogo social con sindicatos y patronal.",
    "Proteger un marco vasco de relaciones laborales y la prevalencia de los convenios colectivos vascos cuando establezcan condiciones más favorables para las personas trabajadoras.",
    "Ampliar la prestación por desempleo hasta un máximo de 36 meses, vinculada a la mejora de la empleabilidad y con más protección para quienes tienen más dificultades de reincorporación.",
    "Acercar la prestación por cese de actividad de los autónomos a la de desempleo, simplificar su acceso y hacerla compatible temporalmente con el inicio de un nuevo negocio.",
    "Reforzar la Inspección de Trabajo contra el fraude laboral, la contratación irregular, los falsos autónomos y la economía sumergida."
   ],
   "mas": [
    "Favorecer una negociación colectiva que traslade las mejoras de productividad a los salarios y al poder adquisitivo.",
    "Analizar con administraciones, sindicatos y patronal la productividad, el absentismo, la competitividad y los salarios, y proponer medidas de prevención y control y de bienestar físico y mental.",
    "Permitir, en casos estratégicos y justificados, actualizar el precio de los contratos públicos para cubrir las subidas salariales pactadas y garantizar el empleo y la continuidad del servicio.",
    "Mejorar la prevención de riesgos laborales y la protección de la salud física y mental en el trabajo, coordinando servicios sanitarios, mutuas y Seguridad Social.",
    "Aplicar la directiva europea de transparencia retributiva para detectar y corregir la brecha salarial entre mujeres y hombres, y reforzar los protocolos contra el acoso laboral, sexual y discriminatorio.",
    "Regular las prácticas formativas garantizando los derechos del alumnado y su carácter educativo, respetando la Formación Profesional Dual y las competencias vascas.",
    "Facilitar la formación continua y la recualificación de las personas trabajadoras ante los cambios tecnológicos y productivos."
   ]
  },
  "impuestos": {
   "breve": "Propone reducir el Impuesto sobre la Electricidad, revisar el IVA de alimentos básicos y ampliar la capacidad normativa foral.",
   "clave": [
    "Reducir de forma permanente el Impuesto Especial sobre la Electricidad al 0,5 %, dentro de los límites de la normativa europea.",
    "Reforma del IVA de bienes esenciales: estudiar tipos cero o superreducidos para alimentos básicos (pescado, carne) y productos para celíacos, y revisar la tributación de electricidad, gas, combustibles y transporte público.",
    "Revisar la normativa de estabilidad presupuestaria con reglas de gasto más flexibles y permitir que ayuntamientos, diputaciones forales y Gobierno Vasco usen sus superávits en inversiones prioritarias.",
    "Ampliar, mediante la actualización del Concierto Económico, la capacidad normativa de las Haciendas Forales en el IVA y los Impuestos Especiales, dentro de la armonización europea."
   ],
   "mas": [
    "Revisar el IVA cultural para favorecer la actividad de artistas y galerías, aprovechando el margen de la normativa europea.",
    "Modificar la Ley 35/2006 del IRPF para declarar exentas las indemnizaciones del Fondo de Compensación para las Víctimas del Amianto.",
    "Garantizar que las reformas fiscales y presupuestarias estatales respeten el Concierto Económico y la autonomía financiera de las instituciones vascas.",
    "Fiscalidad incentivadora para el biometano, el hidrógeno renovable y otros combustibles de bajas emisiones en industria y transporte difícil de electrificar."
   ]
  },
  "pensiones": {
   "breve": "Propone revalorizar las pensiones con el IPC, eliminar penalizaciones por jubilación anticipada y crear una prestación para cuidadores.",
   "clave": [
    "Revalorizar las pensiones cada año conforme al IPC y mejorar progresivamente las pensiones mínimas y no contributivas.",
    "Eliminar las penalizaciones por jubilación anticipada para quienes tengan más de 40 años cotizados y corregir también las que afectan a quienes ya están jubilados.",
    "Prestación económica para cuidadores no profesionales que hayan dejado o reducido su empleo, tomando como referencia el salario mínimo y la intensidad de los cuidados.",
    "Culminar la transferencia a Euskadi de la gestión del régimen económico de la Seguridad Social, respetando el carácter unitario del sistema y la solidaridad."
   ],
   "mas": [
    "Reducir la brecha de género en las pensiones compensando interrupciones laborales, reducciones de jornada y lagunas de cotización por cuidado de hijos y familiares dependientes.",
    "Coeficientes reductores de la edad de jubilación para cuidadores no profesionales acogidos al convenio especial de la Seguridad Social.",
    "Extender la previsión social de empleo mediante la negociación colectiva, como complemento y nunca como sustitución de las pensiones públicas, con acuerdos estables en el Pacto de Toledo.",
    "Cumplir y financiar íntegramente la Ley ELA para las personas con ELA y otras enfermedades de alta complejidad y curso irreversible.",
    "Aprobar un Real Decreto de Electrodependencia, proteger a estas personas frente a cortes de luz y darles acceso al bono social como consumidor vulnerable severo.",
    "Evaluar cada año la prestación por cuidado de menores con cáncer u otras enfermedades graves (CUME) y estudiar su extensión al personal funcionario.",
    "Reformar el Real Decreto 483/2025 para que el fondo de compensación del amianto llegue a todos los beneficiarios de la Ley 21/2022, revisando cuantías y simplificando el pago.",
    "Fondo Personal para Cuidados en la Comunidad que combine prestaciones, servicios y apoyos, y más servicios de respiro para las familias cuidadoras.",
    "Reforzar la lucha contra la pobreza infantil y la financiación del sistema público de protección social ante el envejecimiento y la dependencia."
   ]
  },
  "sanidad": {
   "breve": "Propone culminar las transferencias sanitarias pendientes, ajustar el sistema MIR y regular el uso medicinal del cannabis.",
   "clave": [
    "Adaptar el sistema MIR para ajustar la oferta de plazas de especialistas a las necesidades reales, evitar vacantes y agilizar la acreditación de nuevas unidades docentes.",
    "Valorar el conocimiento de las lenguas oficiales en el acceso a la formación sanitaria especializada en los territorios con más de una lengua oficial.",
    "Culminar las transferencias sanitarias pendientes a Euskadi: formación especializada, acreditación de plazas, control de las incapacidades laborales y sanidad exterior.",
    "Regular el uso medicinal del cannabis, con las condiciones sanitarias y de seguridad necesarias para su uso terapéutico."
   ],
   "mas": [
    "Participación permanente de los Gobiernos Vasco y Navarro en los órganos estatales que autorizan, registran y fijan el precio de los medicamentos.",
    "Más investigación y atención para enfermedades raras y neurodegenerativas, incluido el Alzheimer, y mejor acceso a medicamentos huérfanos.",
    "Negociar la reforma del Estatuto Marco con profesionales, sindicatos y comunidades, reconociendo la especificidad del trabajo médico y con memoria económica suficiente.",
    "Mejorar la planificación de profesionales sanitarios coordinando la formación especializada con las necesidades de los sistemas públicos de salud."
   ]
  },
  "educacion": {
   "breve": "Propone preservar las competencias educativas vascas, una educación plurilingüe y reforzar la Formación Profesional Dual.",
   "clave": [
    "Preservar las competencias educativas de Euskadi frente a interferencias estatales y defender la capacidad normativa del Sistema Vasco de Becas.",
    "Educación inclusiva, plurilingüe e intercultural, con refuerzo de la coeducación y de la educación afectivo-sexual en igualdad.",
    "Fortalecer la Formación Profesional Dual mediante la colaboración entre centros formativos y empresas y su conexión con el empleo.",
    "Defender la capacidad de Euskadi para decidir la gobernanza de sus universidades e impulsar su participación en proyectos universitarios europeos."
   ],
   "mas": [
    "Favorecer la colaboración entre universidades y empresas en formación, investigación y generación de empleo cualificado.",
    "Mejorar la conexión entre formación y empleo para que los jóvenes accedan a puestos de calidad acordes con su preparación."
   ]
  },
  "inmigracion": {
   "breve": "Propone más competencias vascas en extranjería, acogida descentralizada de solicitantes de protección internacional y vías legales de migración.",
   "clave": [
    "Más competencias para Euskadi en migración y extranjería, hacia una gestión integral de llegada, acogida, residencia, trabajo e integración, incluida la asunción de funciones de extranjería por la Ertzaintza.",
    "Acuerdo entre el Estado y las instituciones vascas para una acogida descentralizada de solicitantes de protección internacional, rechazando grandes centros como el previsto en Arana (Vitoria-Gasteiz).",
    "Vías legales y ordenadas de migración, contratación en origen según las necesidades del mercado laboral vasco y avanzar en los procesos de regularización previstos en la legislación.",
    "Promover alternativas a la privación de libertad en los Centros de Internamiento de Extranjeros (CIE) y reforzar las garantías de migrantes y solicitantes de asilo en frontera."
   ],
   "mas": [
    "Reconocer a Euskadi como frontera norte en la planificación y gestión migratoria, con recursos y coordinación adecuados.",
    "Ampliar la gestión vasca de los procedimientos de residencia y trabajo para reducir los plazos de tramitación.",
    "Agilizar la homologación de titulaciones y cualificaciones profesionales extranjeras.",
    "Agilizar los procedimientos de asilo y protección internacional garantizando los derechos de los solicitantes.",
    "Política europea común de migración y asilo con reparto equilibrado de solicitantes de protección internacional y de menores migrantes no acompañados.",
    "Fomentar la integración social y laboral de las personas migrantes y el aprendizaje del euskera como herramienta de integración."
   ]
  },
  "energia": {
   "breve": "Propone acelerar la inversión en redes eléctricas, compensar los costes indirectos del CO₂ y terminar la Y vasca.",
   "clave": [
    "Acelerar la inversión en redes eléctricas de Euskadi, con seguimiento, incentivos y penalizaciones contra los retrasos, y priorizar los proyectos industriales viables en el acceso y conexión a la red.",
    "Destinar a compensar los costes indirectos del CO₂ de la industria el máximo permitido por la UE y mantener un régimen transitorio de apoyo a la cogeneración de alta eficiencia con nuevas subastas.",
    "Revisar la planificación energética estatal y el Plan Nacional Integrado de Energía y Clima para incorporar las necesidades industriales, la seguridad de suministro y la competitividad.",
    "Terminar la Y vasca con calendario verificable, accesos soterrados a Bilbao y Vitoria-Gasteiz y conexión con Iruñea, y transferir las cercanías que discurren íntegramente por Euskadi."
   ],
   "mas": [
    "Favorecer el almacenamiento energético, activar mecanismos de capacidad y reforzar las infraestructuras de gas natural en Euskadi.",
    "Mantener los bonos sociales eléctrico y térmico y la Tarifa de Último Recurso del gas, y restablecer la Comisión Nacional de la Energía como regulador independiente.",
    "Facilitar el autoconsumo compartido y las comunidades energéticas reduciendo plazos de tramitación, y rehabilitación energética mediante el Plan Nacional de Renovación de Edificios.",
    "Ayudas estables para vehículos electrificados aplicadas en el momento de la compra, ayudas plurianuales para renovar flotas pesadas y más puntos de recarga en corredores estratégicos.",
    "Ejecución prioritaria de la Variante Sur Ferroviaria de Bilbao y de las inversiones del Corredor Atlántico, incluida la Plataforma Multimodal de Jundiz.",
    "Modificar la Ley 15/2009 para que los costes de los peajes puedan repercutirse a los clientes del transporte de mercancías por carretera.",
    "Reforma integral de la Ley de Costas y plan de protección de la costa vasca frente a la erosión, los temporales y la subida del nivel del mar.",
    "Estrategia de adaptación al cambio climático con financiación suficiente, priorizando la prevención de inundaciones, temporales e incendios.",
    "Eliminar los pasos a nivel pendientes en Enkarterri y Zalla con plazos vinculantes y garantizar la accesibilidad universal de estaciones y trenes."
   ]
  },
  "economia": {
   "breve": "Propone una PAC con plan estratégico propio, revisar las restricciones a la pesca y proteger el modelo cooperativo vasco.",
   "clave": [
    "PAC 2028-2034 con un Plan Estratégico propio para Euskadi, gestionado y controlado desde las instituciones vascas y con financiación suficiente y diferenciada.",
    "Revisar las restricciones a la pesca de fondo en las 87 zonas del Atlántico nororiental del Reglamento (UE) 2022/1614 y repartir las cuotas pesqueras según las capturas históricas.",
    "Proteger el modelo cooperativo vasco en la legislación estatal y facilitar que las plantillas asuman empresas viables como cooperativas o sociedades laborales capitalizando la prestación por desempleo.",
    "Garantizar que el Estado cumpla sus compromisos con las empresas vascas en las que tenga participación o financiación pública, manteniendo empleo y centros de decisión en Euskadi."
   ],
   "mas": [
    "Reforzar las líneas del ICO y los instrumentos públicos de garantía para pymes y autónomos, y reducir burocracia, duplicidades y barreras regulatorias al crecimiento.",
    "Adaptar los programas estatales de I+D a la industria vasca y apoyar la digitalización, la automatización y la inteligencia artificial en las pymes.",
    "Proteger el futuro industrial de comarcas en crisis o transformación, como Aiaraldea, con inversión, descarbonización y suelo industrial.",
    "Relevo generacional en el campo con cotizaciones reducidas para jóvenes agricultores y ganaderos, ayudas para la transmisión de explotaciones y acceso a la tierra.",
    "Exigir a los productos agrarios y pesqueros importados condiciones equivalentes y reforzar la Ley de la Cadena Alimentaria para que los precios cubran los costes de producción.",
    "Coeficientes reductores de jubilación para los autónomos de la pesca y su comercialización, y ayudas ante subidas extraordinarias de costes energéticos, vedas y paralizaciones.",
    "Renovar la flota pesquera vasca usando la capacidad disponible (GT y kW) para mejorar seguridad, condiciones laborales y eficiencia energética.",
    "Proteger Rioja Alavesa con medidas de rentabilidad y comercialización y reforzando la diferenciación de su origen en el etiquetado de los vinos.",
    "Más apoyo a la internacionalización de las empresas vascas y facilitar el relevo generacional en negocios familiares viables.",
    "Financiación suficiente para sanidad animal, seguros agrarios y emergencias, y modernización del sector forestal y de la madera."
   ]
  },
  "igualdad": {
   "breve": "Propone perímetros de protección en torno a centros de interrupción del embarazo y tipificar las terapias de conversión.",
   "clave": [
    "Modificar la Ley de Seguridad Ciudadana para establecer perímetros de protección de al menos 150 metros alrededor de los centros donde se practica la interrupción voluntaria del embarazo.",
    "Tipificar específicamente en el Código Penal las prácticas de conversión dirigidas a modificar la orientación sexual, la identidad sexual o la expresión de género.",
    "Cumplir íntegramente el Pacto de Estado contra la Violencia de Género renovado en 2025 y regular y definir la violencia vicaria.",
    "Equiparar las ayudas estatales a víctimas de violencia de género y de violencias sexuales y hacer compatibles las indemnizaciones judiciales con las pensiones no contributivas."
   ],
   "mas": [
    "Transponer las Directivas europeas 2024/1499 y 2024/1500 sobre organismos de igualdad respetando las funciones de Emakunde, y regular la profesión de agente de igualdad.",
    "Formación obligatoria en perspectiva de género para la judicatura y la Fiscalía, con calendario y evaluaciones periódicas.",
    "Nuevos órganos judiciales especializados y refuerzo de las secciones de Violencia sobre la Mujer en Euskadi, en especial en Vitoria-Gasteiz y Barakaldo.",
    "Reconocer y reparar a las mujeres víctimas de la dictadura, en particular del Patronato de Protección a la Mujer, con participación de Gogora.",
    "Desarrollar el artículo 50 de la Ley 4/2023 para adecuar la documentación de las personas extranjeras trans a su identidad de género.",
    "Reforzar la persecución de los delitos de odio contra personas LGTBIQ+ y exigir a las plataformas el cumplimiento del Reglamento europeo de Servicios Digitales.",
    "Más obligaciones a las plataformas digitales para proteger a la infancia frente al ciberacoso y la violencia sexual digital, con verificación de edad proporcionada.",
    "Órganos judiciales especializados en infancia y adolescencia en Euskadi para evitar la revictimización.",
    "Incorporar la perspectiva juvenil en las leyes estatales y mecanismos de participación de los jóvenes en la elaboración y evaluación de políticas públicas."
   ]
  },
  "seguridad": {
   "breve": "Propone reconocer a la Ertzaintza como policía integral, reformar la «ley mordaza» y rechazar la prisión permanente revisable.",
   "clave": [
    "Reconocer a la Ertzaintza como policía integral y policía judicial de Euskadi, con participación directa en la cooperación policial europea y acceso pleno a las bases de datos policiales europeas.",
    "Reformas legales para una respuesta judicial ágil frente a la multirreincidencia, en especial en delitos que afectan a barrios, comercios y espacios públicos.",
    "Reformar la Ley de Seguridad Ciudadana («ley mordaza») eliminando restricciones desproporcionadas y reformar los delitos de opinión sobre la Corona, las instituciones y los símbolos del Estado.",
    "Rechazar la prisión permanente revisable y orientar el sistema penitenciario a la reeducación y la reinserción."
   ],
   "mas": [
    "Reformar la Ley Orgánica del Poder Judicial para recuperar una jurisdicción universal efectiva sobre crímenes internacionales graves.",
    "Que la organización judicial culmine en el Tribunal Superior de Justicia del País Vasco, salvo la jurisdicción reservada al Supremo, y crear un Consejo Vasco de Justicia.",
    "Reforzar la cooperación policial internacional contra la delincuencia organizada y transfronteriza.",
    "Elaborar un Plan Estatal de Derechos Humanos con objetivos, plazos y mecanismos públicos de seguimiento."
   ]
  },
  "exterior": {
   "breve": "Propone la oficialidad del euskera, catalán y gallego en la UE, presencia propia en el Consejo y una Macrorregión Atlántica.",
   "clave": [
    "Oficialidad del euskera, el catalán y el gallego en la Unión Europea, con uso efectivo en las instituciones comunitarias.",
    "Presencia con voz propia de Euskadi en el Consejo de la UE, en particular en ECOFIN y en Justicia y Asuntos de Interior, cuando se traten materias de su competencia.",
    "Crear una Macrorregión Atlántica Europea para cooperar en ferrocarril, energía, industria, pesca y economía azul, incluidas las relaciones con el Reino Unido.",
    "Política exterior centrada en los derechos humanos y el derecho internacional, cooperación al desarrollo con recursos suficientes y defensa de la abolición internacional de la pena de muerte."
   ],
   "mas": [
    "Participación de Euskadi en el Marco Financiero Plurianual 2028-2034 y gestión descentralizada de los fondos europeos, sin recentralización por el Estado.",
    "Reconocimiento y representación de las realidades nacionales en las instituciones europeas, incluido el Parlamento Europeo.",
    "Una Unión Europea con más autonomía estratégica que proteja su industria y responda a los retos tecnológicos, energéticos y climáticos.",
    "Cumplir los plazos de las redes transeuropeas de transporte, en especial las conexiones ferroviarias transfronterizas de Euskadi."
   ]
  },
  "estado": {
   "breve": "Propone cumplir el Estatuto de Gernika, un «Concierto Político» con el Estado y una nueva Ley de Secretos Oficiales.",
   "clave": [
    "Cumplir íntegramente el Estatuto de Gernika y completar todas las transferencias pendientes, con mecanismos bilaterales de negociación y seguimiento de los acuerdos entre Euskadi y el Estado.",
    "Nueva relación política con el Estado, un «Concierto Político», basada en el reconocimiento nacional de Euskadi, la bilateralidad y garantías frente a la modificación unilateral de los acuerdos.",
    "Ampliar las capacidades financiero-fiscales vascas mediante la modificación de la Ley del Concierto Económico y del Convenio Económico navarro.",
    "Aprobar una nueva Ley de Secretos Oficiales con criterios objetivos de clasificación y plazos de desclasificación automática."
   ],
   "mas": [
    "Rechazar cualquier recentralización o vaciamiento de las competencias vascas por vía legislativa, administrativa o presupuestaria.",
    "Proteger los Derechos Históricos del Pueblo Vasco y defender, junto a Geroa Bai, el Amejoramiento del Fuero y las instituciones propias de Navarra.",
    "Apoyar que la ciudadanía de Treviño (Trebiño) y Villaverde de Trucíos (Turtzioz) se pronuncie sobre su futuro, incluida su posible incorporación a Euskadi.",
    "Desclasificar los documentos sobre el 3 de marzo de 1976 en Vitoria-Gasteiz, la muerte de Mikel Zabalza, el atentado del bar Aldana (1980) y los Sanfermines de 1978.",
    "Aplicar íntegramente la legislación de Memoria Histórica y Memoria Democrática y reforzar la transparencia de las administraciones.",
    "Más autonomía de gestión para los puertos de Bilbao y Pasaia, con la desclasificación de Pasaia como puerto de interés general para poder transferirlo.",
    "Modelo aeroportuario vasco coordinado con más capacidad de decisión sobre Bilbao, Donostia y Vitoria-Gasteiz, y más inversión en el aeropuerto de Foronda."
   ]
  }
 }
},
{
 "id": "bng",
 "name": "BNG",
 "nombre": "Bloque Nacionalista Galego",
 "ambito": "Galicia",
 "doc": "Programa electoral 29N. Xerais 2026",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "91 páginas",
 "idioma": "Gallego",
 "estructura": [
  "Introducción",
  "Más fuerza para Galicia",
  "Derecho a una vida digna",
  "Derecho a unos servicios públicos de calidad",
  "La economía al servicio de las mayorías sociales",
  "Infraestructuras públicas y ordenación territorial",
  "Frente a la crisis ambiental y la emergencia climática",
  "Lengua y cultura",
  "Democracia y soberanía digital",
  "Políticas para la juventud",
  "Deportes",
  "Galicia por la paz"
 ],
 "resumen": "Programa centrado en ampliar el autogobierno de Galicia: concierto económico con Hacienda propia y traspaso de competencias en Seguridad Social, relaciones laborales, energía, infraestructuras y seguridad. Propone servicios públicos de gestión exclusivamente pública, topes legales al alquiler y un parque público financiado con el 3 % de los PGE, jornada de 35 horas, SMI al 60 % del salario medio, derogar las reformas de pensiones y subir la tributación del capital y las grandes fortunas. En política exterior defiende la salida de la OTAN y la reducción del gasto militar.",
 "esencial": [
  "Concierto económico para Galicia, con Hacienda gallega propia y traspaso de competencias a la Xunta.",
  "Servicios sanitarios y educativos de gestión pública y supresión progresiva de los conciertos.",
  "Parque público de alquiler financiado con el 3 % de los Presupuestos y topes al alquiler.",
  "Reducción de la jornada laboral y salario mínimo ligado al salario medio.",
  "Derogar las reformas de pensiones y subir la tributación del capital y de las grandes fortunas.",
  "Salida de la OTAN y reducción del gasto militar."
 ],
 "pdf": "pdf/bng.pdf",
 "pdfMB": "1,4 MB",
 "ejes": {
  "E1": {
   "p": -1,
   "e": "IRPF más progresivo y más tributación del capital; blindar y aumentar los impuestos a banca, energéticas y grandes fortunas (pp. 43-44)."
  },
  "E2": {
   "p": -1.5,
   "e": "Topar por ley los alquileres, expropiación de vivienda pública comprada por fondos y 3 % de los PGE para parque público (p. 12); alquiler forzoso y canon a vivienda vacía (p. 14)."
  },
  "E3": {
   "p": -1.5,
   "e": "35 horas sin reducción salarial, SMI al 60 % del salario medio y recuperar 45 días por despido improcedente (p. 15)."
  },
  "E4": {
   "p": -1.5,
   "e": "Corporación Industrial Pública Gallega e intervención pública de Alcoa (p. 46); empresa pública de energía con los embalses (pp. 55-56); nacionalización de AP-9 y AP-53 (p. 10)."
  },
  "E5": {
   "p": -2,
   "e": "Sanidad con titularidad, financiación, gestión y provisión «exclusivamente públicas» mediante la reforma de la Ley 15/97 (p. 37), red educativa única pública y supresión de conciertos (pp. 34-35)."
  },
  "E6": {
   "p": -1,
   "e": "Más gasto: 7 % del PIB en educación (p. 35), 3 % de los PGE en vivienda (p. 12), protección social hasta la media UE (p. 21); uso incondicional de remanentes municipales (p. 45)."
  },
  "E7": {
   "p": -1.5,
   "e": "Topes legales al alquiler (p. 12), regulación legal de precios de alimentos básicos y precio máximo de carburantes (p. 21)."
  },
  "E8": {
   "p": -1.5,
   "e": "Revalorización según IPC real, jubilación ordinaria a los 65 y derogar planes de pensiones privados de empleo (pp. 18-19)."
  },
  "S1": {
   "p": -1.5,
   "e": "Facilitar la regularización, garantizar derechos a vivienda, sanidad y educación y cerrar los CIE (pp. 22-23)."
  },
  "S2": null,
  "S3": {
   "p": -1.5,
   "e": "Autodeterminación de género de menores trans de 12 años, reconocimiento no binario y sanciones a organizaciones que nieguen derechos LGTBI (p. 29)."
  },
  "S4": {
   "p": -1.5,
   "e": "Derogar la «Ley Mordaza», la prisión permanente revisable y prohibir las pelotas de goma (p. 30)."
  },
  "S5": {
   "p": -1,
   "e": "Derogar los delitos de injurias a la Corona, escarnio de creencias religiosas y ultrajes a símbolos nacionales (p. 30)."
  },
  "S6": {
   "p": -1.5,
   "e": "Reforma integral según el Convenio de Estambul, ley de violencia vicaria y figura del feminicidio (pp. 24-25)."
  },
  "S7": {
   "p": -1.5,
   "e": "Denunciar el Concordato y los Acuerdos con la Santa Sede y sacar la Religión del currículo (pp. 32, 35)."
  },
  "S8": {
   "p": -1.5,
   "e": "Derogar la Ley de Amnistía de 1977 y modificar la Ley de Memoria para acabar con la impunidad del franquismo (p. 31)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Propone topar el alquiler por ley, prohibir desahucios sin alternativa y destinar el 3 % de los presupuestos a vivienda pública.",
   "clave": [
    "Topar por ley los precios del alquiler, prohibir los desahucios de personas vulnerables y suspender de forma automática e indefinida cualquier lanzamiento sin alternativa habitacional.",
    "Destinar el 3 % de los Presupuestos Generales del Estado, a través del Plan estatal de vivienda, a crear un parque público de alquiler permanente.",
    "Renovación automática de los alquileres y carácter indefinido de los contratos por ley; facilitar la expropiación forzosa de viviendas de promoción pública compradas por fondos de inversión.",
    "Facilitar que las comunidades autónomas apliquen alquiler forzoso, expropiación temporal o un canon (mínimo 10 €/m², +10 % anual hasta triplicarse) a viviendas vacías 5 años o más de grandes propietarios.",
    "Recargos en el Impuesto de Sociedades a fondos y SOCIMI que incumplan la función social de la vivienda y eliminar las deducciones del IRPF a quien alquile por encima del precio de referencia."
   ],
   "mas": [
    "Transferir gratuitamente los suelos y viviendas de la Sareb en Galicia al Instituto Galego da Vivenda e Solo para incorporarlos al parque público de alquiler.",
    "Garantizar por ley el carácter permanentemente público de las viviendas financiadas con recursos públicos e impedir su privatización.",
    "Mecanismos eficaces para frenar el paso de la vivienda habitual al alquiler de temporada, por habitaciones y de uso turístico.",
    "Condicionar las ayudas estatales a la rehabilitación a la duración de los contratos o al control de rentas durante un periodo, para evitar expulsiones o subidas abusivas.",
    "Permitir a los ayuntamientos crear nuevos impuestos o tasas sobre las viviendas vacías.",
    "Facilitar el cambio de hipotecas de tipo variable a tipo fijo y endurecer el marco legal contra los abusos bancarios en la financiación de vivienda.",
    "Promover las cooperativas de vivienda en propiedad y alquiler con más bonificaciones fiscales y líneas de financiación sin intereses canalizadas por las comunidades autónomas.",
    "Facilitar la creación de empresas públicas autonómicas o municipales de promoción de vivienda pública y de gestión de alquiler social.",
    "Ceder a la Xunta los edificios sin uso del Ministerio de Defensa y evitar la privatización del suelo público de ADIF, INVIED o Puertos del Estado, destinándolo a vivienda.",
    "Medidas contra la discriminación de los jóvenes en el acceso a la vivienda por carecer de avales familiares o tener contratos temporales, y prioridad juvenil en el parque público."
   ]
  },
  "empleo": {
   "breve": "Propone jornada de 35 horas, un SMI vinculado al salario medio y derogar las reformas laborales vigentes.",
   "clave": [
    "Jornada laboral de 35 horas semanales sin reducción salarial y avanzar hacia la jornada de 32 horas en cuatro días.",
    "Subir el SMI hasta el 60 % del salario medio según la Carta Social Europea y Eurostat, sin que pueda compensarse o absorberse con complementos, y competencia gallega para mejorarlo.",
    "Derogar íntegramente las reformas laborales y restituir los 45 días de indemnización por despido improcedente con un máximo de 42 mensualidades, la autorización administrativa en los despidos colectivos y los salarios de tramitación.",
    "Eliminar las empresas de trabajo temporal (ETT) y las agencias privadas de colocación, la subcontratación en cadena y los falsos autónomos.",
    "Traspasar a Galicia las competencias de relaciones laborales para un Marco Gallego de Relaciones Laborales, con prevalencia de los convenios gallegos y provinciales sobre los estatales."
   ],
   "mas": [
    "Dar al trabajador la opción entre readmisión e indemnización y exigir en el despido objetivo un periodo de consultas mínimo de un mes con informe vinculante de la Inspección.",
    "Periodo de prueba máximo de 15 días con causa motivada; contratos a tiempo parcial de al menos 20 horas semanales y no más del 15 % de la plantilla.",
    "Fijos discontinuos: llamamientos con intervalo máximo de 2–3 meses, preaviso mínimo de 15 días e indemnización de 45 días por año al terminar el llamamiento.",
    "Prestación por desempleo del 75 % de la base reguladora los primeros 180 días y del 65 % después, nunca inferior al SMI; subsidio no inferior al SMI.",
    "Derogar el IPREM y recuperar el SMI como único indicador de renta; prohibir las dobles escalas salariales.",
    "Empleo público: suprimir por ley la tasa de reposición, interinidad máxima del 5 %, procesos selectivos en 12 meses y revalorización salarial anual.",
    "Plan contra la siniestralidad laboral con reducción obligatoria de jornada en las actividades más peligrosas y ampliación del reconocimiento de enfermedades profesionales.",
    "Auditorías retributivas y planes de igualdad obligatorios, con refuerzo de la Inspección de Trabajo.",
    "Aproximar los derechos de los autónomos a los asalariados en incapacidad temporal, maternidad y paternidad, jubilación y cese de actividad.",
    "Prácticas remuneradas y contratos formativos de menos de un año pagados al 100 % del convenio; registro digital y trazable de la jornada y derecho a la desconexión."
   ]
  },
  "impuestos": {
   "breve": "Propone una Hacienda gallega propia, un IRPF más progresivo sobre el capital y gravar banca, energéticas y grandes fortunas.",
   "clave": [
    "Nuevo modelo de financiación basado en el concierto económico: Hacienda Gallega que recaude todos los impuestos, política fiscal propia y tributación en Galicia de las empresas que operan allí.",
    "IRPF más progresivo con tipos distintos según la naturaleza de la renta, menos para el trabajo y más para el capital, y tramos ajustados al IPC gallego.",
    "Blindar los impuestos a la banca, las grandes energéticas y las grandes fortunas, rebajar sus mínimos exentos, aumentar su progresividad y traspasar su gestión a Galicia.",
    "IVA permanente del 5 % en electricidad, gas, biomasa y leña; rebaja permanente en alimentación básica, productos del mar, higiene y transporte público; Impuesto Especial sobre la Electricidad al 0,5 %.",
    "Impuesto de Sociedades progresivo según el tamaño de la empresa y subir del 10 % al 25 % la reducción por reserva de capitalización de las pymes."
   ],
   "mas": [
    "Prohibir la contratación pública y las ayudas a empresas con sociedades en paraísos fiscales sin actividad económica real.",
    "Más medios y recursos para la prevención y la lucha contra el fraude y la evasión fiscal.",
    "Fiscalidad ambiental sobre energía, transporte, contaminación y recursos naturales, orientada más a cambiar conductas que a recaudar.",
    "Gravar el negocio de extracción masiva de datos de las plataformas según el número de usuarios en cada territorio y transferir lo recaudado a las comunidades.",
    "Reducir al tipo superreducido del IVA los bienes y servicios esenciales y los bienes culturales, y rebajar el IVA de los productos pesqueros.",
    "Deducciones en IRPF y Sociedades inversamente proporcionales a los tipos de gravame soportados.",
    "Elevar la cantidad exenta por kilometraje en vehículo privado de 0,26 € a 0,40 € por kilómetro, más peajes y aparcamiento justificados.",
    "Revisar la financiación local reformando la Participación en los Ingresos del Estado y permitir el uso incondicional de los remanentes municipales."
   ]
  },
  "pensiones": {
   "breve": "Propone derogar las reformas de 2011, 2013, 2021 y 2023, jubilación a los 65 años y pensiones mínimas hasta el SMI.",
   "clave": [
    "Derogar las reformas de pensiones de 2011, 2013, 2021 y 2023 y recuperar la jubilación ordinaria a los 65 años y la parcial a los 61.",
    "Subir las pensiones mínimas hasta el SMI, revalorizar todas según el IPC real y elevar de inmediato las no contributivas al 75 % del umbral de pobreza.",
    "Financiar el sistema con presupuestos e impuestos a la riqueza, eliminar el tope máximo de las bases de cotización y suprimir el Mecanismo de Equidad Intergeneracional (MEI).",
    "Traspasar a Galicia la Seguridad Social y el Ingreso Mínimo Vital para crear una Renta Gallega de Inclusión Social y Laboral no inferior al SMI."
   ],
   "mas": [
    "Jubilación voluntaria sin penalización con 35 años cotizados y eliminación de las penalizaciones por jubilación anticipada.",
    "Derogar las normas que fomentan los planes de pensiones privados de empleo en los convenios y cualquier gestión financiera privada de las pensiones públicas.",
    "Calcular la base reguladora sobre un periodo de 10 años elegidos por el beneficiario.",
    "Coeficientes reductores de la edad de jubilación para profesiones penosas, peligrosas o insalubres y ampliarlos en el marisqueo.",
    "Subir el complemento de brecha de género al menos diez puntos por encima del IPC cada año y cubrir las lagunas de cotización de las mujeres.",
    "Cotización al 100 % en las reducciones de jornada por cuidados y ampliar más allá de 3 años las excedencias por cuidados computadas como cotizadas.",
    "Prohibir la gestión de contingencias comunes y profesionales por las mutuas, que pasaría a ser íntegramente pública.",
    "Elevar el gasto en protección social al menos hasta la media de la UE, con servicios sociales básicos de titularidad y gestión públicas.",
    "Exigir al Estado la deuda con Galicia por la financiación de la dependencia desde 2006, que el documento cifra en más de 3.000 M€, y destinar los fondos a la red pública de cuidados.",
    "Desarrollar y financiar la asistencia personal para personas con discapacidad, blindar la prestación por cuidado de menores con enfermedad grave (CUME) y plan de accesibilidad universal."
   ]
  },
  "sanidad": {
   "breve": "Propone que la sanidad sea exclusivamente pública, eliminar el copago farmacéutico y ampliar la cartera común pública.",
   "clave": [
    "Modificar la Ley 15/1997 para que la titularidad, financiación, gestión y provisión de los servicios sanitarios correspondan exclusivamente a entidades públicas.",
    "Elevar la financiación de la sanidad pública al menos a la media de inversión por habitante de la UE, ponderando la dispersión y el envejecimiento de la población.",
    "Ampliar la cartera común con financiación 100 % pública: atención dental, podología, óptica, logopedia, terapia ocupacional, nutrición, ortoprótesis y rehabilitación.",
    "Poner fin al copago farmacéutico y aprobar una nueva Ley de universalización de la asistencia sanitaria sin resquicios que amparen exclusiones."
   ],
   "mas": [
    "Marco legal con criterios, indicadores y requisitos mínimos y transparentes de información sobre listas de espera de consultas, pruebas e intervenciones.",
    "Eliminar la tasa de reposición de personal como norma básica para todo el Estado.",
    "Traspasar a Galicia la formación MIR, EIR y PIR y aumentar las plazas según las necesidades reales del Servizo Galego de Saúde.",
    "Marco legal para que los profesionales permanezcan en el sistema público al menos lo que duró su especialización, con vínculos estables y condiciones dignas.",
    "Garantizar con urgencia la jubilación anticipada y parcial del personal estatutario de los servicios de salud.",
    "Nuevo Estatuto Marco de los profesionales sanitarios sin recentralizar competencias y recuperación íntegra de las pagas extraordinarias del personal estatutario.",
    "Financiar la investigación en enfermedades raras y en salud de la mujer (endometriosis, fibromialgia), con indicadores de género y representación equitativa en los ensayos clínicos.",
    "Traspasar la sanidad penitenciaria al Servizo Galego de Saúde con los medios necesarios y compensación de la deuda de Interior.",
    "Reconocer el nivel 3 de clasificación profesional al personal técnico en cuidados auxiliares de enfermería (TCAE).",
    "Plan de prevención y atención de la salud mental dirigido a la juventud, con recursos suficientes para su tratamiento."
   ]
  },
  "educacion": {
   "breve": "Propone una red única pública de 0 a 18 años, suprimir los conciertos y sacar la Religión del currículo.",
   "clave": [
    "Red única pública de 0 a 18 años, obligatoria de 3 a 18, con libros, material y actividades extraescolares gratuitos, avanzando hacia la supresión de los conciertos educativos.",
    "Eliminar ya los conciertos en la enseñanza no obligatoria y en los centros que segregan por sexo, con sanciones por incumplimiento.",
    "Gasto educativo de al menos el 7 % del PIB y financiación de las universidades públicas con referencia al 1,5 % del PIB.",
    "Sacar la asignatura de Religión del currículo escolar y denunciar el concordato con la Santa Sede y los acuerdos con otras confesiones.",
    "Transferir a Galicia todas las competencias educativas para aprobar leyes gallegas de educación, de FP, de enseñanzas artísticas y del sistema universitario."
   ],
   "mas": [
    "Suprimir la tasa de reposición docente y programas de relevo generacional del profesorado.",
    "Reformar la LOSU para definir un modelo de universidad pública y evitar la privatización del sistema universitario gallego.",
    "Revertir los aspectos que el documento considera lesivos de la LOMLOE, la LOSU y la Ley de FP.",
    "Traspasar a Galicia la gestión de las becas universitarias y no universitarias y el seguro escolar, mejorando su acción protectora.",
    "Transferir a Galicia los medios de la UNED, la Universidad Internacional Menéndez Pelayo y los centros del CSIC.",
    "Programas específicos de financiación de vivienda para el estudiantado, en especial residencias universitarias públicas, y del transporte universitario.",
    "Elección democrática de las direcciones de los centros y fin de la libre designación en los Centros Integrados de FP.",
    "Protocolo estatal para prevenir, detectar y tratar el acoso escolar y el ciberacoso.",
    "Servicio de igualdad de género y diversidad sexual en todos los centros y contenidos específicos en la enseñanza obligatoria y universitaria.",
    "Derecho a examinarse en gallego en la UNED y convenios para enseñar gallego en los territorios gallegohablantes de comunidades limítrofes."
   ]
  },
  "inmigracion": {
   "breve": "Propone la regularización de inmigrantes, el cierre de los CIE y el reconocimiento del gallego como criterio para la nacionalidad.",
   "clave": [
    "Promover y facilitar la regularización administrativa de los inmigrantes y reformar las leyes para garantizar sus derechos a vivienda, trabajo, sanidad y educación.",
    "Cierre de los Centros de Internamiento de Extranjeros (CIE) y fin de las «devoluciones en caliente».",
    "Que el conocimiento acreditado de la lengua y cultura gallegas se admita como criterio para obtener la nacionalidad española, con independencia del conocimiento del español.",
    "Agilizar la homologación de títulos extranjeros y crear sistemas de acreditación de competencias profesionales, también para los emigrantes retornados."
   ],
   "mas": [
    "Reforzar la inspección laboral contra la explotación de trabajadores inmigrantes y apoyar su afiliación sindical y organización colectiva.",
    "Más personal y medios en las oficinas de extranjería para atender en tiempo y forma a inmigrantes, refugiados y solicitantes de asilo.",
    "Garantizar el cumplimiento del derecho internacional de protección de inmigrantes, refugiados y solicitantes de asilo.",
    "Erradicar cualquier forma de discriminación y actitud racista en las administraciones públicas.",
    "Incluir el acceso al aprendizaje del gallego en el proceso de acogida desde el primer momento.",
    "Reconocer y dignificar el trabajo de cuidados que realizan mayoritariamente mujeres inmigrantes.",
    "Defender en la UE una política migratoria respetuosa con el derecho de asilo y renegociar los acuerdos de Schengen.",
    "Plan de choque para el retorno de los jóvenes emigrados con inserción laboral y acceso a vivienda, y evitar la discriminación fiscal de los retornados.",
    "Apoyo a personas LGTBI migrantes y refugiadas y reconocimiento legal de la identidad de las personas trans migrantes en su documentación."
   ]
  },
  "energia": {
   "breve": "Propone una tarifa eléctrica gallega, una empresa pública de energía y prohibir los cortes de suministro eléctrico.",
   "clave": [
    "Tarifa eléctrica gallega con menores peajes de transporte por ser Galicia excedentaria en producción, y traspaso de las competencias energéticas, incluida la decisión sobre instalaciones de más de 50 MW.",
    "Recuperar para lo público las concesiones de los embalses y transferirlas a Galicia como base de una empresa pública gallega de energía.",
    "Retirar los planes de ordenación del espacio marítimo (POEM) y declarar el litoral gallego no apto para parques eólicos marinos.",
    "Revisar el RDL 20/2022 para recuperar la evaluación de impacto ambiental y la participación ciudadana en los parques eólicos y paralizar los más lesivos ya aprobados.",
    "Prohibir definitivamente los cortes de suministro eléctrico con un mecanismo que supere el bono social, y mantener la prohibición del fracking."
   ],
   "mas": [
    "Reformar la factura eléctrica para que la retribución de las eléctricas se base en los costes reconocidos de producción.",
    "Impulsar el autoconsumo y las comunidades energéticas ciudadanas, reconociendo como tales a las comunidades de montes.",
    "Minería: declarar las materias primas críticas bienes de dominio público, participación pública mínima del 20 % en su explotación, restringir la minería a cielo abierto y prohibir el cianuro.",
    "Servicio de cercanías ferroviarias en las principales ciudades gallegas y traspaso de las líneas interiores a una empresa pública gallega de transporte ferroviario.",
    "AP-9 y AP-53 públicas y sin peajes, anulando la prórroga de concesión de la AP-9 aprobada en el año 2000.",
    "Completar el Corredor Atlántico de Mercancías, la variante exterior de Ourense del AVE y la alta velocidad Vigo–Oporto en el horizonte 2030–2032.",
    "Auditoría independiente de seguridad de toda la red ferroviaria e instalación del sistema ERTMS donde aún no funcione.",
    "Declarar el ferrocarril modo prioritario de transporte terrestre en el Plan Nacional Integrado de Energía y Clima, con objetivos anuales medibles.",
    "Catalogar el eucalipto como especie exótica invasora y limitar su cultivo para proteger el suelo, el agua y la biodiversidad y prevenir incendios.",
    "Reducir el tráfico motorizado y fomentar la movilidad activa («modelo Pontevedra») en lugar de restricciones por tipo y antigüedad del vehículo.",
    "Límites estrictos a los macrocentros de datos privados, abastecimiento 100 % renovable y canon por capacidad instalada para las comunidades afectadas."
   ]
  },
  "economia": {
   "breve": "Propone una Corporación Industrial Pública Gallega, reformar la Ley de la Cadena Alimentaria y rechazar el acuerdo UE-Mercosur.",
   "clave": [
    "Transferir las participaciones del Estado en empresas radicadas en Galicia a una Corporación Industrial Pública Gallega y prever la intervención pública de Alcoa-San Cibrao.",
    "Obligar a devolver ayudas, subvenciones y bonificaciones a las empresas que deslocalicen su producción.",
    "Convertir Navantia-Ferrol en complejo industrial integral con construcción naval civil y entrada de la Xunta en el consejo de administración de Navantia.",
    "Reformar la Ley de la Cadena Alimentaria para impedir ventas por debajo del coste de producción y rechazar el acuerdo UE-Mercosur.",
    "Inversión estatal en I+D+i del 3 % del PIB en 2030 y Estatuto del Personal de Investigación con derechos retributivos y estabilidad."
   ],
   "mas": [
    "Regular por ley los precios de los alimentos básicos y actuar contra la especulación y los beneficios extraordinarios de la gran distribución.",
    "Precio máximo legal para gasolina y diésel, con referencia al precio medio del 24 de febrero de 2022, hasta que se estabilicen los precios.",
    "Pesca: eliminar el principio de estabilidad relativa, eximir a la pesca artesanal de TAC y cuotas y que Galicia negocie directamente en la Política Pesquera Común.",
    "Reconocer a Galicia como «zona altamente dependiente de la pesca» y concentrar la inspección pesquera en el cuerpo de Gardacostas de Galicia.",
    "Rechazar los recortes a la PAC (-22 %) y al FEMPA (-67 %) del Marco Financiero Plurianual 2028–2034 y exigir gestión descentralizada de los fondos.",
    "Plan de Industrialización para las comarcas en crisis industrial, como Ferrol y Vigo, con recursos estatales para la Xunta.",
    "Estatuto especial para las empresas electrointensivas y concluir los concursos de transición justa manteniendo los megavatios liberados por el cierre de centrales.",
    "Ayudas directas a la incorporación de jóvenes al sector primario y apoyo a los circuitos cortos de transformación y comercialización.",
    "Reformar la Ley de Contratos del Sector Público para reducir la dependencia de software privativo extraeuropeo y favorecer el código abierto y la participación de pymes.",
    "Reformar la Ley de la Ciencia para liberar con licencias abiertas el software, algoritmos y patentes de proyectos financiados con fondos públicos."
   ]
  },
  "igualdad": {
   "breve": "Propone una reforma conforme al Convenio de Estambul, medidas hacia la abolición de la prostitución y reconocer a las personas no binarias.",
   "clave": [
    "Reforma integral conforme al Convenio de Estambul que cubra todas las violencias contra las mujeres, dé rango de ley a la violencia vicaria e introduzca el feminicidio con un Estatuto de Víctima de Feminicidio.",
    "Medidas hacia la abolición de la prostitución que persigan al proxeneta y al «prostituidor» sin criminalizar a las mujeres, y oposición a legalizar los vientres de alquiler.",
    "Proteger a las personas trans menores de 12 años respetando su autodeterminación de género y reconocer legalmente a las personas no binarias.",
    "Retirar subvenciones y sancionar a las organizaciones que nieguen o vulneren los derechos de las personas LGTBI.",
    "Reconocer legalmente a las familias monoparentales, compensar económicamente las reducciones de jornada por cuidados y cofinanciar desde el Estado la gratuidad de las escuelas infantiles gallegas."
   ],
   "mas": [
    "Gestión pública directa de los dispositivos telemáticos de protección, informes forenses de riesgo, revisión periódica de VioGén y geolocalización del agresor desde riesgo medio.",
    "Reformar la Ley de Paridad (Ley Orgánica 2/2024) para permitir más mujeres en puestos correlativos de las listas electorales.",
    "Que los recursos del Pacto de Estado y de la Ley Orgánica 10/2022 sean públicos y de gestión directa, integrando en el sistema público los centros de crisis privatizados.",
    "Más plazas judiciales y medios en las secciones de violencia sobre la mujer y formación obligatoria de policías y operadores jurídicos.",
    "Cambios legales contra la violencia machista digital, incluida la cometida mediante inteligencia artificial.",
    "Desbloquear la ley contra la trata y la explotación de seres humanos con protección integral de las víctimas sin discriminación por nacionalidad.",
    "Incluir a las víctimas de violencia machista como colectivo prioritario en las políticas de acceso a la vivienda.",
    "Código ético contra el sexismo en los medios de comunicación como requisito para recibir fondos públicos.",
    "Medidas contra los delitos de odio con estadística fiable, inclusión laboral de las personas trans y envejecimiento sin LGTBIfobia en residencias.",
    "Medidas para la igualdad en el deporte y para que las deportistas puedan ser madres sin abandonar su carrera profesional."
   ]
  },
  "seguridad": {
   "breve": "Propone derogar la «Ley Mordaza» y la prisión permanente revisable y traspasar la seguridad pública a Galicia.",
   "clave": [
    "Derogar íntegramente la Ley de Seguridad Ciudadana de 2015 («Ley Mordaza»), prohibir las pelotas de goma y suprimir la presunción de veracidad de las declaraciones de los agentes.",
    "Derogar la prisión permanente revisable y la libertad vigilada posterior al cumplimiento de la pena.",
    "Derogar el delito de desórdenes públicos agravados y los de injurias a la Corona, ejércitos, fuerzas de seguridad e instituciones, escarnio religioso y ultrajes a los símbolos nacionales.",
    "Traspasar a Galicia la seguridad pública, la policía judicial y el tráfico, con despliegue de la Policía Gallega, y las Instituciones Penitenciarias.",
    "Inhabilitación directa de cargos públicos que cometan fraude fiscal u operen con paraísos fiscales, y regulación estricta de las puertas giratorias y las incompatibilidades parlamentarias."
   ],
   "mas": [
    "Que los presos gallegos cumplan condena en Galicia y traslado de los que la cumplen en otros territorios.",
    "Legislación penitenciaria más garantista: menos sanciones de aislamiento, más peso de las juntas de tratamiento y derecho de sindicación de los presos que trabajen.",
    "Reducir las sanciones de la Ley contra la Violencia en el Deporte y dejar de sancionar en la Ley del Deporte la exhibición de pancartas o banderas.",
    "Derogar la Ley de Secretos Oficiales y la Ley de Seguridad Nacional para garantizar la transparencia en el gasto militar y policial.",
    "Limitar el reconocimiento facial y la vigilancia biométrica masiva y vetar la policía predictiva y el uso de IA para sustituir decisiones judiciales.",
    "Transparencia en la contratación pública negociada y directa y supresión de las trabas normativas a la gestión pública directa de servicios.",
    "Oficialidad real del gallego en la Administración de Justicia, como lengua preferente en resoluciones y notificaciones de oficio."
   ]
  },
  "exterior": {
   "breve": "Propone la salida de la OTAN con «neutralidad activa», reducir el gasto militar y cesar el envío de armas a Ucrania.",
   "clave": [
    "Salida de la OTAN y defensa de su disolución, dentro de un estatus de «neutralidad activa» del Estado.",
    "Rechazar el aumento del gasto militar y reducirlo progresivamente; cancelar los acuerdos bilaterales con EE. UU. y pedir la retirada de sus tropas.",
    "Cesar el envío de armamento a Ucrania en favor de una salida negociada y prohibir la venta de armas a regímenes dictatoriales o a Estados agresores.",
    "Revertir el cambio de posición sobre el Sáhara Occidental e impulsar un referéndum de autodeterminación; reconocimiento efectivo del Estado palestino y condena a Israel por la ocupación."
   ],
   "mas": [
    "Retirada inmediata de los militares españoles en misiones de la OTAN y de EE. UU., en especial en países fronterizos con Rusia.",
    "Abolición definitiva del servicio militar obligatorio, eliminando de la legislación la posibilidad de restablecerlo.",
    "Desmilitarizar Galicia y devolver para uso civil los espacios militares, empezando por la isla de Tambo, castillos y espacios costeros.",
    "Oponerse a la militarización de la UE y excluir de los planes mineros las materias primas consideradas críticas para uso militar.",
    "Rechazar la injerencia de EE. UU. en América Latina, incluida la agresión a Venezuela y el bloqueo a Cuba.",
    "Oponerse a los tratados comerciales que vulneren la soberanía de los pueblos y los derechos sociales, laborales y ambientales.",
    "Prohibición internacional y estatal del uso de inteligencia artificial para seleccionar objetivos en conflictos armados.",
    "Oficialidad plena del gallego en la UE, ingreso de Galicia como miembro asociado de la UNESCO y presencia en la Comunidad de Países de Lengua Portuguesa."
   ]
  },
  "estado": {
   "breve": "Propone referéndums vinculantes, incluida la autodeterminación, el traspaso de puertos y costas y suprimir las diputaciones.",
   "clave": [
    "Cambios legales que permitan convocar referéndums vinculantes sobre asuntos de interés, incluido el derecho de autodeterminación, y participación social en la gestión de fondos públicos.",
    "Reforma electoral: reparto proporcional directo (cuota Hare), Galicia como circunscripción única, eliminar el umbral del 5 % y voto a los 16 y 17 años.",
    "Traspaso a Galicia de puertos, aeropuertos, costas, cuenca Miño-Sil, salvamento marítimo y carreteras estatales, y nacionalización de las autopistas AP-9 y AP-53.",
    "Suprimir la administración periférica del Estado, los ministerios con competencias transferidas y las diputaciones provinciales.",
    "Derogar la Ley de Amnistía de 1977 y modificar la Ley de Memoria Democrática para acabar con la impunidad del franquismo y garantizar la tutela judicial de las víctimas."
   ],
   "mas": [
    "Denunciar los Acuerdos con la Santa Sede para un Estado laico, eliminando los privilegios de la Iglesia y la presencia religiosa en instituciones y servicios públicos.",
    "Retirar la simbología franquista, prohibir los actos públicos de exaltación y reconocer el Pazo de Meirás como lugar de memoria cedido a Galicia.",
    "Más horas de desconexión en gallego en TVE con horizonte de un canal propio, recuperar Radio 4 en gallego y pluralidad informativa en los medios públicos.",
    "Aceptar la documentación en gallego como oficial ante la Administración General del Estado y habilitar el gallego en todos sus trámites telemáticos.",
    "Selecciones gallegas con pleno derecho en competiciones internacionales oficiales y traspaso de las competencias del Consejo Superior de Deportes.",
    "Ley de transparencia algorítmica, revisión humana obligatoria de las resoluciones administrativas críticas y registro estatal de sistemas algorítmicos.",
    "Traspaso de competencias en telecomunicaciones, audiovisual, infraestructuras digitales y ciberseguridad, y nube pública gallega con fondos estatales y europeos.",
    "Atención presencial sin cita previa y con intérpretes o recursos adaptados en todas las oficinas de la Administración General del Estado.",
    "Voto exterior siempre en urna en lugares habilitados y voto telemático para los marineros embarcados en flotas de altura.",
    "Traspaso a Galicia de los archivos y fondos documentales, culturales e históricos gallegos dispersos en instituciones y organismos del Estado."
   ]
  }
 }
},
{
 "id": "compromis",
 "name": "Compromís",
 "nombre": "Compromís-Front Valencià",
 "ambito": "Comunidad Valenciana",
 "doc": "Programa electoral 29N. Compromís-Front Valencià",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026, presentado como acuerdo de las fuerzas de la izquierda valenciana para las Cortes Generales.",
 "ext": "64 páginas",
 "idioma": "Valenciano",
 "estructura": [
  "Una vida segura: vivienda, salarios y pensiones",
  "Servicios públicos para cuidar y proteger",
  "Democratización de la economía",
  "Un territorio habitable y resiliente",
  "Más democracia, más derechos, más libertades",
  "Un país con voz propia y recursos suficientes",
  "Compromiso con la paz y la dignidad humana"
 ],
 "resumen": "Programa de la coalición valenciana Compromís-Front Valencià, que condiciona su apoyo a cualquier gobierno a la defensa de los intereses valencianos y a la reparación de las víctimas de la DANA. Pone el foco en la intervención pública en vivienda (expropiación a grandes tenedores, 1 % del PIB), la jornada de 32 horas, una fiscalidad más progresiva y la titularidad pública en energía, junto con la mejora de la financiación valenciana y un Estado plurinacional.",
 "esencial": [
  "Reparación de las víctimas de la DANA y defensa de los intereses valencianos.",
  "Intervención pública en vivienda, con expropiación de grandes tenedores y viviendas protegidas públicas.",
  "Jornada laboral de cuatro días sin reducción salarial y salario mínimo ligado al salario medio.",
  "Fiscalidad más progresiva, con impuesto a las grandes fortunas y gravamen a las empresas oligopolísticas.",
  "Empresa pública de energía, titularidad pública progresiva de las grandes eléctricas y control de Red Eléctrica.",
  "Financiación autonómica con criterios de población, concierto económico y Estado plurinacional."
 ],
 "pdf": "pdf/compromis.pdf",
 "pdfMB": "0,3 MB",
 "ejes": {
  "E1": {
   "p": -1,
   "e": "Ampliar el Impuesto a las Grandes Fortunas hacia la «tasa Zucman», impuesto a oligopolios y a robots, rentas financieras con la misma progresividad que las del trabajo (p. 18-19)."
  },
  "E2": {
   "p": -1.5,
   "e": "Ley de Expropiación de grandes tenedores, 1 % del PIB para vivienda pública, control de alquileres en zonas tensionadas y prohibir compras a fondos (p. 4-5)."
  },
  "E3": {
   "p": -1.5,
   "e": "Jornada de 32 horas sin rebaja salarial, salario mínimo al 60 % del salario medio y despido improcedente de 45 días (p. 6)."
  },
  "E4": {
   "p": -1.5,
   "e": "Recuperar la titularidad pública de las grandes eléctricas y el 100 % de Red Eléctrica, banca pública e industria farmacéutica pública (p. 9, 20, 29-30)."
  },
  "E5": {
   "p": -1.5,
   "e": "Derogar la Ley 15/1997 contra la privatización sanitaria, concertada subsidiaria de la pública y limitar las universidades privadas (p. 9-10, 17, 38)."
  },
  "E6": {
   "p": -1.5,
   "e": "Reformar el artículo 135 de la Constitución, suprimir el Pacto de Estabilidad y revisar las reglas fiscales; 7 % del PIB en educación y 1 % en vivienda (p. 4, 10, 40, 59, 63)."
  },
  "E7": {
   "p": -1.5,
   "e": "Control de alquileres, control público de los márgenes de la gran distribución y remuneración regulada de la electricidad frente al mercado marginalista (p. 4, 24, 29)."
  },
  "E8": {
   "p": -1.5,
   "e": "Volver a la jubilación a los 65, revalorización según el coste de la vida en la Constitución y fin de las desgravaciones a planes privados (p. 8)."
  },
  "S1": {
   "p": -1.5,
   "e": "Vías de regularización, cierre de los CIE, derecho de voto a migrantes y sanidad sin discriminación por situación administrativa (p. 9, 51, 64)."
  },
  "S2": {
   "p": -1,
   "e": "Interrupción del embarazo gratuita en la red pública y regulación de la objeción de conciencia «en los términos previstos legalmente» (p. 52-53); no menciona la eutanasia."
  },
  "S3": {
   "p": -1,
   "e": "Blindar la ley trans y LGTBI y el matrimonio igualitario y tipificar como delito las terapias de conversión (p. 55-56)."
  },
  "S4": {
   "p": -1.5,
   "e": "Derogar la Ley de Seguridad Ciudadana («ley mordaza»), abolir las balas de goma y suprimir la Sala de lo Penal de la Audiencia Nacional (p. 42-43)."
  },
  "S5": {
   "p": -0.5,
   "e": "Derogar el delito de ofensa a los sentimientos religiosos (p. 45); a la vez propone «graves sanciones» a quien desinforme (p. 16). No menciona las injurias a la Corona."
  },
  "S6": {
   "p": -1,
   "e": "Reforzar juzgados y unidades especializadas, protección frente a violencia vicaria y plan contra la explotación sexual y la trata (p. 53-55)."
  },
  "S7": {
   "p": -1.5,
   "e": "Eliminar los acuerdos con la Santa Sede, la financiación de la Iglesia y la mención del artículo 16.3 de la Constitución; escuela laica (p. 44-45)."
  },
  "S8": {
   "p": -1.5,
   "e": "Derogar la Ley de Amnistía de 1977, ampliar la Ley de Memoria Democrática y retirar símbolos franquistas (p. 43)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Propone prohibir la compra a fondos, expropiar grandes tenedores y destinar el 1 % del PIB a vivienda protegida pública.",
   "clave": [
    "Prohibir la compra de vivienda a sociedades especulativas y «fondos buitre», también mediante sociedades interpuestas, y prohibir temporalmente la compraventa a no residentes en zonas tensionadas.",
    "Nueva Ley de Expropiación de Grandes Fondos y Sociedades Tenedoras para ampliar el parque público, empezando por quienes tengan más de 1.000 viviendas y bajando hasta 50.",
    "Destinar el 1 % del PIB anual a comprar o promover vivienda protegida pública o con cooperativas y entidades sin ánimo especulativo, junto con comunidades y ayuntamientos.",
    "Gravamen del 10 % sobre el valor catastral de la tercera vivienda y siguientes, IBI progresivo desde la tercera y fin de los privilegios fiscales de las SOCIMI.",
    "Alquiler indefinido como régimen ordinario, competencia municipal para declarar zonas tensionadas y controlar precios, y prohibición legal de desahucios sin alternativa habitacional."
   ],
   "mas": [
    "Prohibir los algoritmos y programas de IA que coordinen precios del alquiler con datos compartidos, con multas de hasta el 10 % de los beneficios mundiales.",
    "Registro Estatal de Arrendamientos Urbanos obligatorio para controlar precios en tiempo real, incluidos los alquileres de temporada y de habitaciones.",
    "Exención del ITP para la primera vivienda de menos de 350.000 € y aumento del 200 % a partir de la tercera propiedad.",
    "Fondo de Inversión Estatal que capte 18.000 M€ de ahorro privado para programas de vivienda asequible, remunerando a los pequeños ahorradores.",
    "Encuesta de vivienda vacía para que los ayuntamientos apliquen recargos del IBI, y Casa 47 y empresas públicas autonómicas como intermediarias entre propietarios e inquilinos.",
    "Derecho de tanteo de la Administración en la venta de promociones antiguas de vivienda de protección oficial, salvo entre particulares para vivienda habitual.",
    "Requisitos de habitabilidad más exigentes en confort, espacio y temperatura para poder alquilar una vivienda.",
    "Deducción estatal en el IRPF para jóvenes inquilinos con rentas de hasta 33.000 € y cupos de alquiler por debajo del mercado para jóvenes mediante una bolsa pública.",
    "Impulsar cooperativas en cesión de uso sobre suelo público y residencias asequibles para estudiantes y trabajadores jóvenes.",
    "Inventario y banco estatal de suelo y edificios públicos en desuso para destinarlos a vivienda social, equipamientos y usos vecinales."
   ]
  },
  "empleo": {
   "breve": "Propone jornada de 32 horas sin reducción salarial, recuperar la indemnización por despido y un SMI al 60 % del salario medio.",
   "clave": [
    "Reducir por ley la jornada laboral a cuatro días, es decir, a 32 horas semanales, sin ninguna disminución del salario.",
    "Garantizar por ley que el salario mínimo alcance el 60 % del salario medio, sin que la subida pueda absorber los complementos salariales.",
    "Recuperar la indemnización de 45 días por año trabajado y los salarios de tramitación en el despido improcedente.",
    "Autónomos: prestación por cese acreditando solo un año de pérdidas, cuota bonificada desde el primer día de baja por enfermedad grave e IVA franquiciado por debajo de 85.000 €."
   ],
   "mas": [
    "Introducir en la legislación laboral cláusulas de actualización salarial automática mientras los convenios colectivos estén vencidos y sin renovar (ultraactividad).",
    "Reducir un 50 % los domingos y festivos laborables y restringir las Zonas de Gran Afluencia Turística mediante la reforma de la ley de horarios comerciales.",
    "Garantizar que las prácticas no sustituyan puestos de plantilla y estén remuneradas, y programas de primera experiencia laboral con contrato y formación.",
    "Condicionar ayudas, bonificaciones y contratos públicos al cumplimiento de la normativa laboral, al mantenimiento del empleo y a la calidad de los puestos.",
    "Reforzar la Inspección de Trabajo contra el fraude en la contratación, las horas extra no declaradas y el incumplimiento de la jornada máxima.",
    "Eliminar en tres años el régimen de módulos de los autónomos, sustituido por un nuevo régimen de Estimación Directa Especial.",
    "Declaraciones semestrales en lugar de trimestrales para autónomos y micropymes, y baja flexible con reincorporación progresiva para enfermedades graves o crónicas.",
    "Modificar el artículo 42 del Estatuto de los Trabajadores para impedir que los hoteles subcontraten la limpieza de habitaciones y reconocer sus lesiones musculoesqueléticas como enfermedad profesional.",
    "Nuevo decreto de Garantía Juvenil centrado en la contratación indefinida y a tiempo completo, y línea estatal de microcréditos para proyectos de jóvenes.",
    "Adaptar las condiciones laborales durante los avisos naranja y rojo de la AEMET por olas de calor."
   ]
  },
  "impuestos": {
   "breve": "Propone mantener el impuesto a las grandes fortunas, gravar a las empresas oligopolísticas y eliminar privilegios fiscales de la aviación.",
   "clave": [
    "Mantener y ampliar el Impuesto a las Grandes Fortunas, acercándolo a propuestas como la «tasa Zucman», y valorar los inmuebles en Patrimonio según un índice estatal.",
    "Crear un impuesto sobre el beneficio de las empresas oligopolísticas y gravar las rentas financieras con la misma progresividad que las del trabajo.",
    "Deflactar el IRPF para las rentas inferiores a 30.000 € para ajustarlo a la inflación.",
    "Eliminar los privilegios fiscales de la aviación (combustible, IVA) y destinar los 6.000 M€ anuales recaudados al ferrocarril; tasa de 2 € por noche en viviendas turísticas.",
    "Reformar el artículo 135 de la Constitución para suprimir la prioridad absoluta del pago de la deuda y pedir la supresión del Pacto de Estabilidad europeo."
   ],
   "mas": [
    "Reducir la deducción por amortización de inmuebles del 3 % al 1 %, con una recaudación adicional de más de 465 M€.",
    "Rebajar la reducción por alquiler de vivienda del 50 % a un máximo del 20 %, solo para rentas de alquiler iguales o inferiores al 85 % del alquiler medio autonómico.",
    "Impuesto o tasa a las empresas por el uso de robots que sustituyan mano de obra, para reforzar el sistema público de pensiones.",
    "Crear un impuesto sobre las emisiones de óxidos de nitrógeno de la aviación comercial y gravar en el IRPF la tenencia injustificada de viviendas vacías.",
    "Bajar el IVA de productos de salud, higiene femenina, peluquería, productos para celíacos, cultura y veterinaria, y subirlo a productos de lujo, contaminantes o nocivos.",
    "Aumentar la plantilla de la Agencia Tributaria contra el fraude y eliminar las ventajas fiscales de las grandes empresas frente a las pymes.",
    "Introducir progresividad en el IBI mediante la Ley de Haciendas Locales, con los mismos derechos para familias monoparentales y numerosas.",
    "Prohibir que la Administración se relacione con paraísos fiscales y con empresas que los utilicen, incluida la contratación pública.",
    "Auditoría ciudadana de la deuda de las administraciones y empresas públicas, analizando posibles responsabilidades de gobiernos anteriores.",
    "Revisar las reglas fiscales y de control de la deuda para que no impidan prestar servicios esenciales ni hacer inversiones necesarias."
   ]
  },
  "pensiones": {
   "breve": "Propone devolver la jubilación a los 65 años, garantizar la revalorización en la Constitución y eliminar el tope de cotización.",
   "clave": [
    "Devolver la edad de jubilación a los 65 años y eliminar los coeficientes reductores a quienes se jubilen anticipadamente tras haber trabajado 40 años.",
    "Garantizar en la Constitución la revalorización de las pensiones conforme al coste de la vida.",
    "Eliminar el tope de la base máxima de cotización para que los salarios más altos coticen íntegramente.",
    "Subir las pensiones no contributivas hasta 800 € y suprimir las desgravaciones de los planes de pensiones privados, PIAS y SIALP.",
    "Prestación universal por crianza de 200 € mensuales por hijo, mayor para familias monoparentales y para hijos con discapacidad superior al 60 %."
   ],
   "mas": [
    "Compensar fuera del IRPF a los pensionistas que tributaron dos veces por aportaciones a mutualidades laborales obligatorias antes de 1979.",
    "Reformar el Ingreso Mínimo Vital para incluir nuevas situaciones de vulnerabilidad, ampliar su cobertura y mejorar su compatibilidad con otras prestaciones.",
    "Ley básica estatal de servicios sociales con prestaciones mínimas, ratios de atención directa e interoperabilidad de datos, que impida privatizar determinados servicios.",
    "Reconocer la ayuda a domicilio como servicio público esencial dentro de la dependencia y aprobar un Estatuto de las Personas Cuidadoras.",
    "Garantizar que el Estado asuma el 50 % de la financiación de la Ley de Dependencia y priorizar la atención en el propio entorno.",
    "Reconocer en las pensiones los periodos de cuidados con cotizaciones asimiladas y reforzar el complemento para reducir la brecha de género.",
    "Mecanismos de jubilación progresiva, sobre todo en sectores con alto desgaste físico o psicológico, e incentivos contra la discriminación laboral por edad.",
    "Obligar a las entidades financieras a abrir cuentas de pago básicas a cualquier persona, sea cual sea su situación laboral o administrativa.",
    "Aumentar la inversión pública en protección social de familias e infancia hasta la media de la Unión Europea."
   ]
  },
  "sanidad": {
   "breve": "Propone derogar la Ley 15/1997, garantizar el acceso universal a la sanidad pública y crear una industria farmacéutica pública.",
   "clave": [
    "Derogar la Ley 15/1997 para blindar la gestión pública de la sanidad e impedir la privatización de la gestión de los servicios.",
    "Garantizar el acceso universal a la sanidad pública sin discriminación por origen o situación administrativa.",
    "Fijar por ley básica una financiación mínima de la atención primaria, ratios de población y listas de espera máximas.",
    "Suprimir el copago farmacéutico de los pensionistas e incluir en el Sistema Nacional de Salud oftalmología, podología, nutrición y odontología.",
    "Crear una industria farmacéutica pública que investigue y produzca medicamentos esenciales, genéricos y para enfermedades raras."
   ],
   "mas": [
    "Pacto estatal por la salud mental con financiación para ampliar plantillas, mejorar el acceso a la atención psicológica y reforzar la prevención del suicidio.",
    "Ampliar la red pública de centros de día y de terapia ambulatoria para el tratamiento integral de la salud mental.",
    "Prohibir fumar en terrazas y playas y prohibir la venta de bebidas energéticas a menores de 16 años.",
    "Evaluaciones de impacto en salud para grandes infraestructuras, proyectos industriales y normas que puedan afectar a la población.",
    "Plan estatal de investigación en salud de las mujeres con financiación estable, centrado en endometriosis, menopausia y diferencias por sexo en enfermedades.",
    "Reforzar la cobertura pública de los tratamientos de fertilidad para reducir listas de espera y garantizar a las mujeres la decisión sobre sus óvulos vitrificados.",
    "Transparencia en los precios de compra de fármacos por el sector público y publicación de todos los pagos de la industria a profesionales sanitarios.",
    "Reformar la Ley 13/2011 del juego para restringir la publicidad de las apuestas y evitar locales de apuestas cerca de centros educativos y sanitarios.",
    "Programa de financiación de la receta deportiva o prescripción de ejercicio físico en los centros de salud.",
    "Desarrollar el Fondo de Garantía Asistencial y el Fondo de Cohesión Sanitaria, garantizando la liquidación y pago de los importes pendientes."
   ]
  },
  "educacion": {
   "breve": "Propone avanzar hacia el 7 % del PIB en educación, conciertos subsidiarios de la pública y comedor escolar gratuito.",
   "clave": [
    "Aumentar la inversión educativa estatal y las transferencias a las comunidades para avanzar hacia el 7 % del PIB.",
    "Reformar la normativa de conciertos para que la red concertada sea realmente subsidiaria de la pública y prohibir ceder suelo público a centros privados.",
    "Reconocer el comedor escolar como parte esencial del programa educativo, con carácter gratuito y universal, mediante la reforma de la Ley Orgánica de Educación.",
    "Ampliar la red pública de 0 a 3 años con financiación estatal y avanzar hacia su gratuidad con condiciones laborales dignas para el profesorado.",
    "Limitar la proliferación de universidades privadas y crear un sistema de tasas universitarias en el que pague menos quien menos tiene."
   ],
   "mas": [
    "Nueva ley de Formación Profesional adaptada al modelo productivo y más plazas y oferta territorial en la FP pública.",
    "Más espacio a la coeducación, la educación ambiental, la cultura de paz y la educación afectivo-sexual en el marco educativo estatal.",
    "Protocolos contra el acoso escolar, la violencia digital y la difusión no consentida de imágenes íntimas, y un plan contra el acoso escolar LGTBIQ+.",
    "Garantizar que las becas universitarias se resuelvan y paguen a principio de curso y mejorar el sistema estatal de becas.",
    "Carrera investigadora integral con contratación estable y reformas que reduzcan la precariedad del profesorado universitario y la investigación pública.",
    "Garantizar el carácter laico de la escuela pública, dejando la enseñanza confesional fuera del currículo y del ámbito escolar.",
    "Fondo de compensación interterritorial para eliminar las desigualdades en el ejercicio del derecho a la educación.",
    "Plan plurianual para bioclimatizar los más de 28.000 centros educativos y renaturalizar sus patios como refugios climáticos abiertos al barrio.",
    "Formación obligatoria y evaluable en antirracismo y antigitanismo en el sistema educativo, con referentes de diversidad étnica en el currículo.",
    "Mantener y ampliar el Plan Corresponsables para ofrecer actividades extraescolares universales y servicios profesionales de cuidado infantil."
   ]
  },
  "inmigracion": {
   "breve": "Propone vías de regularización, cierre de los CIE y prohibir las identificaciones policiales por perfil étnico.",
   "clave": [
    "Impulsar vías de regularización y reformas que faciliten la documentación y la autorización de trabajo de quienes ya viven en España.",
    "Exigir la eliminación de los centros de internamiento de extranjeros (CIE) y una acogida digna, con protección de menores y cumplimiento del derecho de asilo.",
    "Prohibir las devoluciones ilegales encubiertas como retornos voluntarios y garantizar información veraz y comprensible sobre sus consecuencias jurídicas.",
    "Ampliar el derecho de sufragio activo de las personas migrantes y facilitar su acceso a la Administración y la justicia teniendo en cuenta las barreras idiomáticas.",
    "Definir y prohibir por ley las identificaciones policiales por perfil étnico, con formularios de parada obligatorios y estadísticas públicas."
   ],
   "mas": [
    "Mejorar la homologación de títulos y el reconocimiento de cualificaciones de las personas migrantes, con procedimientos claros y garantías.",
    "Pedir la ratificación de la Convención sobre la Protección de los Derechos de los Trabajadores Migratorios y sus familiares.",
    "Pedir al Gobierno que lleve ante el Tribunal de Justicia de la UE los reglamentos y directivas del Pacto Europeo de Migración y Asilo.",
    "Protección y alternativas para las mujeres migrantes en situación irregular víctimas de violencia, para que el miedo a la expulsión no les impida acceder a servicios públicos."
   ]
  },
  "energia": {
   "breve": "Propone mantener el cierre nuclear sin prórrogas, electrificar el sistema en 2030 y limitar los vuelos con alternativa en tren.",
   "clave": [
    "Mantener el calendario de cierre de las centrales nucleares sin nuevas prórrogas, con un plan de reindustrialización verde que garantice el empleo en la comarca.",
    "Crear una empresa pública de energía, recuperar progresivamente la titularidad pública de las grandes eléctricas y llevar al Estado a controlar Red Eléctrica.",
    "Sacar de la factura el impuesto eléctrico y los cargos de política energética, pagarlos con los Presupuestos y reducir el peso del mercado marginalista con contratos renovables a precio fijo.",
    "Revisar la Ley de Cambio Climático para electrificar el 100 % del sistema en 2030 y abandonar los combustibles fósiles en 2040.",
    "Limitar los vuelos nacionales con alternativa en tren de menos de 2,5 horas y paralizar la ampliación norte del puerto de València y las de los aeropuertos de València y Alicante."
   ],
   "mas": [
    "Prohibir los cortes de suministro y reformar el bono social para que sea realmente progresivo.",
    "Fondo de rehabilitación energética de viviendas con ayudas directas y préstamos al 0 % real a través del ICO, sin que las personas vulnerables adelanten dinero.",
    "Separar la energía de la CNMC creando una Comisión Nacional de la Energía y un fondo soberano de renovables financiado con beneficios del oligopolio.",
    "Crear un derecho de tanteo y retracto a favor de la Administración y de la empresa pública de energía en la compraventa de plantas fotovoltaicas entre empresas.",
    "Reestructurar ADIF revirtiendo su «privatización encubierta» mediante subcontratas, con más personal propio e inversión en mantenimiento.",
    "Acelerar el Corredor Mediterráneo con calendario y presupuesto y dar más peso a los corredores ferroviarios de mercancías frente a la carretera.",
    "Prohibir por ley los patrocinios y anuncios de empresas de combustibles fósiles y crear un Observatorio de la Publicidad Verde Engañosa.",
    "Plan Estatal de Emergencia por la Biodiversidad en el primer año y objetivo del 30 % de cobertura arbórea en todos los núcleos urbanos en 2040.",
    "Revertir la reforma de la Ley de Costas de 2013 e impedir nuevas construcciones en zonas amenazadas por la subida del nivel del mar.",
    "Reforzar Protección Civil, la UME y la AEMET, reformar el sistema ES-Alert e impedir por ley construir en zonas inundables."
   ]
  },
  "economia": {
   "breve": "Propone una banca pública de inversión para pymes y vivienda asequible, y más participación del Estado en sectores estratégicos.",
   "clave": [
    "Crear una banca pública de inversión y crédito para pymes, cooperativas, economía social y familias, orientada a la reindustrialización verde y la vivienda asequible.",
    "Aumentar la presencia del Estado en sectores estratégicos mediante participaciones en empresas o la creación de empresas estatales.",
    "Participación directa de los trabajadores en los consejos de administración de las grandes empresas, incluidas las públicas.",
    "Reforzar la Ley de la Cadena Alimentaria para que los precios cubran los costes de producción y ampliar el control público de los márgenes de la gran distribución.",
    "Financiación de la investigación por encima del 3 % del PIB, con una cláusula de no retroceso que impida recortes en crisis."
   ],
   "mas": [
    "Nueva Ley de Industria y Autonomía Estratégica que sustituya la de 1992, con hojas de ruta para cerámica, calzado, juguete y automoción.",
    "Oponerse a nuevos procesos de concentración bancaria y garantizar atención bancaria presencial, sobre todo para mayores y municipios sin servicios.",
    "Estatuto de las Personas Agricultoras y Ganaderas Profesionales y etiquetado que indique qué parte del precio va al productor.",
    "PAC adaptada a la agricultura mediterránea, con regímenes simplificados hasta 5.000 € y prioridad para los profesionales que asumen el riesgo empresarial.",
    "Controles, también en origen, para que las importaciones extracomunitarias cumplan las condiciones sanitarias, ambientales, laborales y de bienestar animal europeas.",
    "IVA reducido para los bienes y servicios necesarios para la producción agraria, incluida la maquinaria.",
    "Trasvases solo como medida excepcional, con acuerdo entre cuencas y respeto a los caudales ecológicos, y riego prioritario tras el abastecimiento humano.",
    "Moratoria inmediata de nuevas macrogranjas, límites estrictos a su tamaño y calendarios de reducción de pesticidas y fertilizantes de síntesis.",
    "Pacto de Estado por un Turismo Justo, Sostenible e Inclusivo, con regulación de los apartamentos turísticos y de la llegada masiva de cruceros.",
    "Fondo estatal que remunere a los municipios rurales por los servicios ambientales que prestan: agua, bosques, biodiversidad y absorción de carbono."
   ]
  },
  "igualdad": {
   "breve": "Propone blindar la ley trans y LGTBI, tipificar las terapias de conversión y garantizar la interrupción voluntaria del embarazo gratuita.",
   "clave": [
    "Blindar la ley trans y LGTBI y el matrimonio igualitario y tipificar como delito las terapias de conversión, con protección especial a menores.",
    "Garantizar la interrupción voluntaria del embarazo gratuita y accesible en la red pública y regular la objeción de conciencia para que no sea institucional.",
    "Reforzar la prohibición de la gestación subrogada y sancionar la publicidad y la intermediación de agencias de «explotación reproductiva».",
    "Ley estatal de familias monoparentales que las equipare a las numerosas, con permisos iguales a la suma de dos progenitores, y pago progresivo de las ocho semanas de permiso por cuidado.",
    "Reforzar unidades policiales y juzgados de violencia sobre la mujer, proteger a los hijos frente a la violencia vicaria y auditar externamente los casos en que falló la protección."
   ],
   "mas": [
    "Plan estatal contra la explotación sexual y la trata con financiación plurianual, más sanciones a quien se lucre sin sancionar a las personas prostituidas.",
    "Campañas dirigidas a hombres y adolescentes que cuestionen la compra de sexo y la normalización de la prostitución, con evaluación periódica de sus efectos.",
    "Desarrollar el Pacto de Estado contra los Delitos de Odio y formación obligatoria en diversidad LGTBIQ+ para la Administración, la justicia y las fuerzas de seguridad.",
    "Formación obligatoria y evaluable en materia de género para jueces y fiscales, incluidos los que ya están en activo.",
    "Educación afectivo-sexual integral y acceso gratuito a anticonceptivos, en especial para jóvenes y mujeres vulnerables.",
    "Programa estatal de distribución gratuita de productos menstruales en centros educativos, sanitarios y penitenciarios, en especial para mujeres jóvenes vulnerables.",
    "Trabajar internacionalmente para eliminar las limitaciones a la adopción internacional por parejas del mismo sexo y fomentar el acogimiento familiar.",
    "Derecho a una baja laboral por parto o cesárea antes de empezar el permiso por maternidad.",
    "Suprimir los espectáculos taurinos con muerte del animal, derogar la ley de 2013 que los declara patrimonio cultural y prohibir la caza con perros.",
    "Ley de protección de la infancia en entornos digitales y transparencia de los algoritmos frente a los patrones adictivos de las plataformas."
   ]
  },
  "seguridad": {
   "breve": "Propone derogar la «ley mordaza», abolir las balas de goma y suprimir la Sala de lo Penal de la Audiencia Nacional.",
   "clave": [
    "Derogar la Ley de Protección de la Seguridad Ciudadana de 2015, a la que el programa llama «ley mordaza».",
    "Abolir el uso de balas de goma, reconocer el derecho de sindicación de las Fuerzas y Cuerpos de Seguridad y eliminar la justicia militar.",
    "Suprimir la Sala de lo Penal de la Audiencia Nacional, a la que considera un órgano excepcional propio de una etapa predemocrática.",
    "Derogar el delito de ofensa a los sentimientos religiosos del artículo 525 del Código Penal.",
    "Ratificación por el Congreso del Fiscal General del Estado y un CGPJ independiente, elegido por mérito y capacidad y menos presidencialista."
   ],
   "mas": [
    "Acceso a la carrera judicial y fiscal con un periodo de aprendizaje y exámenes prácticos, al estilo alemán, en lugar de la oposición memorística.",
    "Crear diez nuevos juzgados, reorganizar la oficina judicial y renovar de forma acelerada su equipamiento informático.",
    "Dignificar la justicia gratuita con retribuciones adecuadas y formación continua para abogados y procuradores de oficio.",
    "Institucionalizar la mediación y el arbitraje para reducir la carga de trabajo de los jueces.",
    "Oficina antifraude y protección por ley de los denunciantes de corrupción mediante un buzón ciudadano anónimo.",
    "Reformar la Ley del Menor para priorizar la reeducación y la reinserción frente a lo que llama «populismo punitivo».",
    "Separación inmediata de los mandos implicados en seguimientos e investigaciones injustificadas de ciudadanos y partidos políticos.",
    "Respuesta penal proporcionada y efectiva ante la violencia machista, con atención a la reincidencia y al incumplimiento de órdenes de protección.",
    "Endurecer las penas por maltrato animal y campañas de sensibilización sobre los derechos de los animales.",
    "Modernizar las Fuerzas y Cuerpos de Seguridad del Estado y revisar su capacidad de respuesta frente a ciberataques contra infraestructuras críticas."
   ]
  },
  "exterior": {
   "breve": "Propone una Unión Europea de la Defensa, prohibir la venta de armas a países que vulneren derechos humanos.",
   "clave": [
    "Romper relaciones diplomáticas y comerciales con países que no garanticen los derechos humanos y practiquen genocidios, «como el Estado de Israel».",
    "Construir una Unión Europea de la Defensa que pueda sustituir el marco de la OTAN e impedir que el gasto militar crezca a costa de los servicios públicos.",
    "Prohibir de forma estricta la venta de armas a países que vulneren los derechos humanos y auditar y publicar todo el gasto en Defensa.",
    "Apoyar la libre determinación de los pueblos en casos como el Sáhara Occidental, redoblando los esfuerzos diplomáticos y exigiendo la celebración de un referéndum.",
    "Recuperar la cooperación al desarrollo con una nueva planificación acorde con la Agenda 2030, garantizando el 0,7 % blindado por ley."
   ],
   "mas": [
    "Seguir apoyando al pueblo ucraniano y facilitar negociaciones que prioricen una salida dialogada urgente a la invasión rusa.",
    "Más apoyo al pueblo palestino para construir instituciones estables y activar todos los recursos diplomáticos para pacificar la región.",
    "Democratizar la ONU con una Asamblea Parlamentaria y acabar con los vetos injustificados en el Consejo de Seguridad.",
    "Crear en Alicante un Centro Internacional de Resolución de Disputas para la mediación y la prevención de conflictos armados.",
    "Reformar la Ley Orgánica del Poder Judicial para recuperar la jurisdicción universal sobre crímenes internacionales y aumentar las aportaciones a la Corte Penal Internacional.",
    "Relación estratégica privilegiada con China, India y América Latina, combinando la exigencia de derechos humanos con el diálogo.",
    "Reforma de los tratados europeos para dar más poder al Parlamento Europeo, superar la unanimidad en política exterior y fiscal y elevar el presupuesto de la UE al 2 % de la RNB.",
    "Llevar ante el Tribunal de Justicia de la UE los acuerdos comerciales que desprotegen a los sectores productivos y el medio ambiente.",
    "Reformular las estrategias de seguridad y defensa ante amenazas híbridas incorporando la agenda «Mujeres, Paz y Seguridad» de Naciones Unidas.",
    "Más peso del sur global en el FMI y el Banco Mundial y ratificación del Tratado de No Proliferación de Armas Nucleares y los convenios pendientes de la OIT."
   ]
  },
  "estado": {
   "breve": "Propone un Estado plurinacional, concierto económico, condonar la deuda histórica y rebajar la edad de voto a 16 años.",
   "clave": [
    "Reformar la financiación autonómica con criterios de población, condonar la deuda histórica valenciana (el 78 % de su deuda) y crear un fondo transitorio de nivelación.",
    "Concierto económico o, en su defecto, un sistema en el que la Generalitat Valenciana recaude directamente la mayor parte de los tributos.",
    "Avanzar hacia un Estado plurinacional, convertir el Senado en cámara de representación territorial y suprimir las diputaciones provinciales.",
    "Derogar la Ley de Amnistía de 1977 y modificar la Ley de Memoria Democrática para reparar a quienes sufrieron la incautación de su dinero por el franquismo.",
    "Rebajar a 16 años la edad para votar, eliminar los aforamientos parlamentarios y judiciales y derogar la Ley de Secretos Oficiales."
   ],
   "mas": [
    "Plan de Rodalies en la Comunitat Valenciana de 1.500 M€ con 58 trenes nuevos y un servicio Avant entre Alicante y València en una hora.",
    "Traspasar a la Generalitat las competencias de costas, puertos, aeropuertos, Rodalies, Ingreso Mínimo Vital e Inspección de Trabajo, con sus recursos.",
    "Inversiones estatales en la Comunitat Valenciana proporcionales a su población, en especial en la provincia de Alicante, con seguimiento público de su ejecución.",
    "Suprimir los acuerdos con la Santa Sede de 1979 y con otras confesiones, la financiación de la Iglesia católica y sus exenciones del IBI.",
    "Reformar el artículo 16.3 de la Constitución para eliminar la mención a la Iglesia católica y sustituir la aconfesionalidad por el laicismo.",
    "Ley de Plurilingüismo de la Administración con requisito lingüístico para funcionarios estatales y jueces en territorios bilingües, y oficialidad del valenciano en la UE.",
    "Reforma constitucional para recuperar el derecho civil valenciano y Ley de Sedes del Estado para descentralizar organismos estatales.",
    "Rendición de cuentas anual de los ministros ante el Parlamento y publicación trimestral de la ejecución presupuestaria, incluida la de la Casa Real.",
    "Fondo estatal de reconstrucción, reforma del Consorcio de Compensación de Seguros y obras de prevención pendientes por la DANA, como las del barranco del Poyo.",
    "Estatuto de la Información con un código deontológico y «graves sanciones» a quien desinforme, y un Consejo Estatal de Medios Audiovisuales."
   ]
  }
 }
},
{
 "id": "cc",
 "name": "Coalición Canaria",
 "nombre": "Coalición Canaria y Municipalistas Primero Canarias",
 "ambito": "Canarias",
 "doc": "Defiende Canarias. Bases del programa electoral de Coalición Canaria y Municipalistas Primero Canarias para las elecciones generales",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "23 páginas, 100 acciones numeradas en diez causas",
 "idioma": "Castellano",
 "estructura": [
  "Manifiesto político",
  "Defender los derechos de Canarias",
  "Servicios públicos y cuidados",
  "Derecho a vivir y permanecer en Canarias",
  "Trabajo y actividad económica",
  "Jóvenes y conocimiento",
  "Territorio y recursos",
  "Las ocho islas",
  "Política migratoria solidaria y europea",
  "Identidad y posición en el Atlántico",
  "Capacidad para decidir y rendición de cuentas"
 ],
 "resumen": "Programa conjunto de Coalición Canaria y Municipalistas Primero Canarias centrado en la relación de Canarias con el Estado y la UE: reclama completar el Estatuto, proteger el REF, aprobar la propuesta de Decreto Canarias y una financiación estatal que compense la insularidad y la lejanía. Sus 100 acciones abarcan vivienda (incluida la limitación de compra por extranjeros), transporte y conectividad entre islas, transición energética insular y una política migratoria con reparto obligatorio entre territorios.",
 "esencial": [
  "Completar el Estatuto de Autonomía y defender la integridad del Régimen Económico y Fiscal (REF).",
  "Aprobación de la propuesta de Decreto Canarias, con financiación estatal y plazos verificables.",
  "Financiación estatal que compense la insularidad y la lejanía del archipiélago.",
  "Vivienda pública y asequible, con límites a la compra por extranjeros y a la vivienda vacacional.",
  "Conectividad entre islas y transición energética insular con renovables y almacenamiento.",
  "Solidaridad obligatoria y automática entre comunidades en la acogida de migrantes llegados a Canarias."
 ],
 "pdf": "pdf/cc.pdf",
 "pdfMB": "0,8 MB",
 "ejes": {
  "E1": {
   "p": 0.5,
   "e": "Pide rebajas fiscales territoriales: deducción del 60 % en el IRPF para La Palma, La Gomera y El Hierro e incentivos fiscales a la primera vivienda y a propietarios que alquilen; no propone subidas (pp. 11, 13)."
  },
  "E2": {
   "p": 0,
   "e": "Combina un fondo estatal de vivienda pública con incentivos fiscales a la compra y al alquiler, agilización de trámites y límites a la compra por extranjeros y a la vivienda vacacional (pp. 10-11)."
  },
  "E3": {
   "p": 0.5,
   "e": "Bonificaciones en las cotizaciones ligadas a subidas salariales y del 50 % de las cuotas empresariales en tres islas; no se pronuncia sobre SMI, jornada ni despido (pp. 12-13)."
  },
  "E4": null,
  "E5": null,
  "E6": {
   "p": -0.5,
   "e": "Reclama más gasto estatal en Canarias y reformas para que las administraciones canarias gasten sus remanentes de tesorería, «con garantías de sostenibilidad financiera» (pp. 20-21)."
  },
  "E7": {
   "p": -0.5,
   "e": "Supervisión de tarifas para que no absorban la bonificación al residente, límites a la vivienda vacacional y a la compra por extranjeros y seguimiento de precios de la cesta básica (pp. 11, 17)."
  },
  "E8": null,
  "S1": {
   "p": -0.5,
   "e": "Acogida con respeto a los derechos humanos, reparto solidario obligatorio de menores y lucha contra los discursos racistas, junto a cooperación con países de origen contra las redes (pp. 18-19)."
  },
  "S2": null,
  "S3": null,
  "S4": null,
  "S5": null,
  "S6": {
   "p": -0.5,
   "e": "Financiación estatal suficiente para aplicar el Pacto de Estado contra la violencia de género en todas las islas (p. 10)."
  },
  "S7": null,
  "S8": null
 },
 "temas": {
  "vivienda": {
   "breve": "Propone un fondo estatal de ocho años para vivienda pública, limitar la compra por extranjeros y la vivienda vacacional.",
   "clave": [
    "Fondo estatal de ocho años para cofinanciar vivienda pública y asequible, con una asignación ajustada a Canarias, y cesión a las administraciones canarias de suelos y edificios del Estado aptos para vivienda.",
    "Reformas en las Cortes para limitar la compra de vivienda en Canarias por extranjeros y un régimen específico ante la UE como región ultraperiférica que haga viable una Ley Canaria de Residencia.",
    "Cobertura jurídica estatal y europea para que Canarias y sus municipios puedan limitar la vivienda vacacional donde haya presión acreditada sobre la vivienda residencial.",
    "Incentivos fiscales estatales a pequeños propietarios que cedan viviendas a programas de alquiler asequible, con garantías públicas de cobro y conservación."
   ],
   "mas": [
    "Plan estatal de reposición y regeneración de barrios, con demolición y reposición cuando rehabilitar no baste, y ayudas para ascensores, aislamiento, eficiencia y autoconsumo.",
    "Línea estatal reforzada de vivienda joven, alquiler asequible y cooperativas, con fórmulas residenciales para estudiantes, alumnado de FP, jóvenes investigadores y trabajadores.",
    "Acortar los procedimientos e informes sectoriales estatales para la vivienda protegida y apoyar la construcción industrializada para reducir costes y plazos.",
    "Incentivos fiscales estatales a la compra de la primera vivienda para jóvenes y familias con ingresos medios y bajos.",
    "Vincular la financiación de la rehabilitación de viviendas vacías a su incorporación al alquiler asequible y regulación estatal estable del alquiler de larga duración.",
    "Ayudas estatales para protección solar, aislamiento, ventilación y climatización eficiente en las viviendas de los hogares con menos recursos.",
    "Inventario de los suelos y edificios del Estado y sus entidades en Canarias que puedan destinarse a vivienda asequible."
   ]
  },
  "empleo": {
   "breve": "Propone financiación estatal del Plan Integral de Empleo, bonificaciones ligadas a subidas salariales y ayudas a los autónomos.",
   "clave": [
    "Financiación estatal del Plan Integral de Empleo de Canarias y de los programas del REF mientras el empleo canario siga en clara desventaja frente a la media estatal.",
    "Incentivos fiscales y bonificaciones en las cotizaciones ligados a subidas salariales pactadas y a la productividad de las empresas canarias.",
    "Aportación estatal al plan cuatrienal de empleo para menores de 35 años previsto en la propuesta de Decreto Canarias.",
    "Bonificación del 50 % de las cuotas empresariales a la Seguridad Social en La Palma, La Gomera y El Hierro para los contratos previstos en el Decreto Canarias."
   ],
   "mas": [
    "Más ayudas estatales a quienes inician una actividad por cuenta propia y a los autónomos con menores rendimientos.",
    "Financiación estatal de la FP y la FP dual, incluidas infraestructuras y apoyo a las empresas formadoras, y vías para el retorno del talento.",
    "Medidas dirigidas a mejorar las retribuciones públicas más bajas, acordadas con el Gobierno de Canarias y los agentes sociales.",
    "Continuidad del plan especial de empleo de La Palma mientras no se cumplan los compromisos de recuperación tras la erupción volcánica."
   ]
  },
  "impuestos": {
   "breve": "Propone defender la integridad del REF, extender la deducción del 60 % del IRPF y permitir el uso de remanentes municipales.",
   "clave": [
    "Defender la integridad del Régimen Económico y Fiscal (REF) y rechazar reformas unilaterales del Estado sin participación del Gobierno y el Parlamento de Canarias.",
    "Impedir que los recursos del REF se computen como financiación ordinaria de la sanidad, la educación, la dependencia o los servicios sociales.",
    "Mantener la deducción del 60 % en el IRPF aplicable en La Palma y extenderla a La Gomera y El Hierro.",
    "Reformas estatales para que el Gobierno canario, los cabildos y los ayuntamientos puedan gastar sus remanentes de tesorería en vivienda, sanidad, educación y bienestar social."
   ],
   "mas": [
    "Mantener el diferencial fiscal canario para la producción audiovisual y orientar los instrumentos del REF a la inversión productiva y no a la mera localización fiscal.",
    "Corregir los cobros indebidos de IVA en las compras por internet cuando corresponda aplicar el IGIC.",
    "Acceso del Instituto Canario de Estadística a la información tributaria para evaluar el REF y las políticas de ultraperiferia.",
    "Flexibilidad fiscal para las instituciones que participan en la reconstrucción de La Palma, con control y garantías de sostenibilidad financiera.",
    "Estabilidad en la participación de cabildos y ayuntamientos en los tributos del Estado y en el Fondo de Compensación Interterritorial."
   ]
  },
  "pensiones": {
   "breve": "Propone compatibilizar los complementos canarios con las pensiones no contributivas y que Canarias tramite el ingreso mínimo vital.",
   "clave": [
    "Que los complementos de renta canarios sean compatibles con las pensiones no contributivas, estén exentos de tributación y no computen para reducirlas o retirarlas.",
    "Que Canarias pueda tramitar y reconocer el ingreso mínimo vital, con cabildos y ayuntamientos, y evitar que aceptar un empleo suponga una pérdida brusca de protección.",
    "Aportación estatal suficiente y estable a la dependencia y estrategia de envejecimiento y cuidados de larga duración.",
    "Programas estatales específicos contra la pobreza infantil mientras Canarias tenga indicadores de pobreza superiores a la media."
   ],
   "mas": [
    "Incorporar las necesidades de las personas con discapacidad y la accesibilidad universal al diseño y la financiación de los programas estatales y europeos destinados a Canarias.",
    "Cooperación y recursos del Estado para la atención social y sanitaria de los canarios del exterior, especialmente mayores, y apoyo a quienes quieran retornar."
   ]
  },
  "sanidad": {
   "breve": "Propone una compensación estatal por los sobrecostes sanitarios de la insularidad y formación de especialistas adaptada a Canarias.",
   "clave": [
    "Compensación estatal específica y actualizada por los sobrecostes sanitarios de la insularidad y la lejanía.",
    "Que la formación sanitaria especializada responda a las necesidades estructurales de Canarias para disponer de los especialistas que faltan.",
    "Reforzar en los Presupuestos Generales del Estado las partidas para la atención a la salud mental en Canarias.",
    "Apoyo estatal a la movilidad de especialistas entre islas cuando sea más eficiente desplazar el servicio que al paciente."
   ],
   "mas": [
    "Estudiar una cobertura reforzada de los desplazamientos interinsulares, como complemento al apoyo estatal a la movilidad de especialistas entre islas.",
    "Financiación estatal para adaptar hospitales, centros de salud y residencias al calor sin interrumpir la atención.",
    "Priorizar el autoconsumo y los sistemas de respaldo energético limpio en hospitales y centros de salud."
   ]
  },
  "educacion": {
   "breve": "Propone financiar plazas públicas de 0 a 3 años, modernizar las universidades canarias y becas para quienes deban desplazarse a estudiar.",
   "clave": [
    "Más financiación estatal para una oferta suficiente de plazas públicas gratuitas de educación infantil de 0 a 3 años.",
    "Recuperar programas estatales de inversión para corregir los déficits de las infraestructuras educativas y adaptar los centros a las nuevas necesidades.",
    "Cumplir y reforzar las becas del REF para estudiantes que deban desplazarse porque sus estudios no se ofrecen en su isla.",
    "Financiación estatal plurianual para modernizar las universidades públicas canarias y reforzar la astrofísica, las ciencias marinas y la biotecnología."
   ],
   "mas": [
    "Criterios que corrijan las desventajas de la ultraperiferia en las convocatorias estatales de I+D+i y en el acceso a Horizon y otros programas europeos.",
    "Reforzar la Plataforma Oceánica de Canarias (PLOCAN) como infraestructura científica española y europea para investigar y ensayar tecnologías marinas.",
    "Crear el Centro Nacional de Vulcanología con sede principal en La Palma y aportación estatal del 50 % de su mantenimiento.",
    "Orientar la cualificación profesional a renovables, almacenamiento, economía azul, audiovisual, rehabilitación, cuidados y combustibles sostenibles.",
    "Financiación estatal para dotar a los centros educativos de sombra, patios verdes, aislamiento y climatización eficiente.",
    "Ayudas estatales para los desplazamientos de artistas, compañías, deportistas y clubes canarios a circuitos y competiciones estatales e internacionales."
   ]
  },
  "inmigracion": {
   "breve": "Propone solidaridad obligatoria entre comunidades, costes de salvamento asumidos por el Estado y la UE y transferir los permisos de trabajo.",
   "clave": [
    "Que el Estado y la UE asuman los costes extraordinarios del salvamento, la acogida y la atención humanitaria en la frontera atlántica.",
    "Solidaridad obligatoria y automática: traslados a otras comunidades autónomas cuando un territorio de primera acogida supere umbrales de capacidad, sin negociar caso a caso.",
    "Financiación estatal suficiente y previsible para los menores extranjeros no acompañados acogidos en Canarias, con su interés superior como guía de los traslados.",
    "Transferir a Canarias las autorizaciones de trabajo para personas extranjeras previstas en el Estatuto de Autonomía."
   ],
   "mas": [
    "Cooperación estable con Mauritania, Senegal, Marruecos y Cabo Verde en desarrollo, seguridad y movilidad ordenada, y lucha contra las redes que se lucran con la migración.",
    "Participación de Canarias en el diseño y la aplicación de las políticas migratorias españolas y europeas que la afectan.",
    "Financiación estatal y europea para programas de integración y convivencia intercultural en los territorios de primera acogida y combatir los discursos racistas."
   ]
  },
  "energia": {
   "breve": "Propone sustituir las centrales térmicas por renovables y flexibles, y condicionar la eólica marina al consenso social.",
   "clave": [
    "Planificación estatal para sustituir progresivamente las centrales térmicas obsoletas por soluciones renovables y flexibles, manteniendo la seguridad de suministro.",
    "Eólica marina en Gran Canaria con subastas, conexión y retribución adaptadas a los sistemas insulares, condicionada a consenso social e institucional.",
    "Mantener la bonificación del 75 % al transporte aéreo y marítimo de residentes, con más supervisión frente a subidas artificiales de tarifas.",
    "Convenio estatal de diez años para financiar el Tren de Gran Canaria y trato equivalente para los proyectos ferroviarios de Tenerife.",
    "Financiación estatal estable para mantener la gratuidad de guaguas y tranvías y el 50 % de los proyectos de transporte por carretera en Lanzarote y Fuerteventura."
   ],
   "mas": [
    "Reformar la retribución de los sistemas eléctricos no peninsulares para premiar el almacenamiento, la flexibilidad y la reducción real de combustibles fósiles.",
    "Ayudas al almacenamiento en baterías y al bombeo de agua de mar, y marco estatal favorable al autoconsumo colectivo y las comunidades energéticas.",
    "Programa estatal extraordinario para redes de transporte y distribución eléctrica, subestaciones y nueva capacidad de conexión antes de que se saturen.",
    "Ayudas reforzadas para electrificar taxis y flotas de alquiler y programas estables de recarga sin vacíos entre convocatorias.",
    "Producir en Canarias metanol renovable, hidrógeno y combustibles sostenibles de aviación (SAF) y conectar los barcos a la electricidad en puerto.",
    "Que España pida a la UE adaptar las políticas climáticas de aviación y navegación a la dependencia canaria del avión y el barco.",
    "Revisar las obligaciones de servicio público en rutas esenciales y conexiones directas entre La Palma, La Gomera y El Hierro.",
    "Programa estatal plurianual de saneamiento para eliminar vertidos sin tratar y compensación del sobrecoste del agua desalada y regenerada.",
    "Fondo estatal para adaptar pueblos y ciudades al calor (arbolado, sombra, refugios climáticos) y financiación para proteger costas frente a la erosión.",
    "Aportación estatal específica para cumplir en Canarias los objetivos europeos de restauración de la naturaleza."
   ]
  },
  "economia": {
   "breve": "Propone defender el POSEI, actualizar las compensaciones al transporte de mercancías y renovar los destinos turísticos maduros.",
   "clave": [
    "Defender íntegramente el POSEI y su dotación diferenciada en el presupuesto europeo y aportar cada año el 100 % de la parte estatal de las ayudas adicionales.",
    "Actualizar las compensaciones estatales al transporte de mercancías hasta el 100 % del coste real, incluido el trayecto hasta la isla de destino final.",
    "Evaluar el impacto de los acuerdos comerciales sobre las producciones canarias y reglas adaptadas a la pesca artesanal, con más posibilidades de pesca de atún rojo y patudo.",
    "Programas estatales de renovación de destinos turísticos maduros con inversiones calculadas sobre la población real, incluida la no empadronada."
   ],
   "mas": [
    "Acuerdo con el Estado y la UE para eliminar barreras y costes de intermediación en el comercio electrónico desde y hacia Canarias.",
    "Adaptar los programas estatales de digitalización, innovación y financiación al tamaño y los costes logísticos de la microempresa canaria.",
    "Actualizar las compensaciones al sector primario por sobrecostes de energía, piensos, fertilizantes y transporte, y financiación estatal contra plagas.",
    "Financiación estatal y europea para incorporar jóvenes a la agricultura, la ganadería y la pesca y mantener el suelo agrícola en uso.",
    "Compensaciones al transporte interinsular de residuos destinados a reciclaje y programas industriales de reparación, reutilización y nuevos materiales.",
    "Programas estatales de economía azul: energías marinas, biotecnología azul, robótica submarina, observación oceánica y acuicultura sostenible.",
    "Evaluar el efecto de las compensaciones por insularidad sobre los precios de los productos básicos y corregir las que no los alivien.",
    "Desarrollar la quinta libertad aérea prevista en el REF para abrir conexiones directas con terceros países.",
    "Plan Específico de Telecomunicaciones de Canarias previsto en el Estatuto para mejorar la conectividad fuera de las grandes áreas urbanas."
   ]
  },
  "igualdad": {
   "breve": "Propone financiación para aplicar el Pacto de Estado contra la violencia de género en todas las islas y accesibilidad universal.",
   "clave": [
    "Financiación estatal suficiente para aplicar el Pacto de Estado contra la violencia de género en todas las islas y proteger a las víctimas y a sus hijos.",
    "Abrir el debate estatal sobre una política común de infancia: ayudas a la crianza, vivienda para hogares con menores y protección frente a la violencia digital.",
    "Accesibilidad universal obligatoria en los programas estatales y europeos de vivienda, transporte, empleo y servicios públicos destinados a Canarias."
   ],
   "mas": []
  },
  "seguridad": {
   "breve": "Propone financiar la Policía Canaria y la activación temprana de la Unidad Militar de Emergencias en incendios.",
   "clave": [
    "Financiación estatal de las 1.400 plazas del Cuerpo General de la Policía Canaria previstas en el Decreto Canarias, en coordinación con las fuerzas de seguridad del Estado.",
    "Que Canarias pueda pedir la activación temprana de la Unidad Militar de Emergencias en incendios de nivel 1 y protocolos para desplazar medios estatales antes de episodios extremos."
   ],
   "mas": []
  },
  "exterior": {
   "breve": "Propone recuperar terrenos militares para uso civil, defender los fondos de las regiones ultraperiféricas y el derecho saharaui a decidir.",
   "clave": [
    "Que Canarias participe en la posición española ante Marruecos sobre delimitación de espacios marítimos, recursos naturales y migración.",
    "Solución al conflicto del Sáhara Occidental conforme a las resoluciones de la ONU y defensa del derecho del pueblo saharaui a decidir su futuro.",
    "Recuperar para uso civil terrenos e instalaciones militares en Canarias, entre ellos el campo de tiro de Pájara (Fuerteventura), y negociar el cese de la actividad militar.",
    "Defender en el próximo marco financiero de la UE los fondos específicos de las regiones ultraperiféricas y aplicar el artículo 349 del Tratado ante normas con impacto desproporcionado."
   ],
   "mas": [
    "Continuidad y refuerzo de INTERREG con Madeira, Azores y África occidental, y reconocimiento estratégico europeo de la Macaronesia.",
    "Nuevos cables submarinos y conexiones alternativas para la seguridad de las telecomunicaciones con Europa, África y América.",
    "Reforzar el papel de Canarias en la cooperación económica, científica y educativa con África occidental y en la diplomacia científica.",
    "Participación de las instituciones canarias en los asuntos exteriores con impacto directo en el archipiélago.",
    "Alianzas con las demás regiones ultraperiféricas y cooperación de España con Francia y Portugal para defender sus recursos.",
    "Incorporar los puertos canarios a corredores marítimos verdes entre Europa, África y América, con renovables y almacenamiento en los recintos portuarios."
   ]
  },
  "estado": {
   "breve": "Propone completar los traspasos del Estatuto con calendario verificable, financiación que reconozca la insularidad y la «nación archipelágica».",
   "clave": [
    "Calendario verificable para completar los traspasos del Estatuto de Autonomía, incluida la gestión del transporte aéreo interinsular, y oposición a la recentralización.",
    "Financiación autonómica que reconozca el coste de prestar servicios en un archipiélago, con población efectiva, fragmentación territorial, pobreza y envejecimiento.",
    "Que una eventual reforma constitucional recoja las singularidades derivadas de la lejanía, la insularidad y la ultraperiferia.",
    "Cumplimiento íntegro de la Agenda Canaria y aprobación de la propuesta de Decreto Canarias, con financiación, plazos y responsables, gobierne quien gobierne.",
    "Papel efectivo del Gobierno canario y los cabildos en la planificación e inversiones de puertos y aeropuertos y negociar la gestión del Registro Especial de Buques."
   ],
   "mas": [
    "Defender a Canarias como «nación archipelágica» con derecho a decidir su rumbo dentro del Estado y el máximo autogobierno en un Estado que reconozca su realidad plurinacional.",
    "Ejecutar los convenios de carreteras, vivienda, agua, costas e infraestructuras educativas y turísticas con financiación y plazos verificables.",
    "Traspaso de las competencias ejecutivas y de gestión del litoral previstas en el Estatuto y en el Decreto Canarias.",
    "Financiación sostenida para la recuperación de La Palma, reintegro de lo adelantado por Canarias y contratación de emergencia para reconstruir.",
    "Mecanismos de acuerdo sobre los nombramientos en organismos estatales radicados en Canarias y sobre las infraestructuras científicas estratégicas.",
    "Incorporar las propuestas de municipios y cabildos a la acción en las Cortes y garantizarles recursos suficientes y competencias claras.",
    "Informe público anual sobre las obligaciones del Estado con Canarias que distinga lo presupuestado, lo transferido y lo ejecutado."
   ]
  }
 }
},
{
 "id": "adelante",
 "name": "Adelante Andalucía",
 "nombre": "Adelante Andalucía",
 "ambito": "Andalucía",
 "doc": "Un programa para frenar a las derechas",
 "tipo": "Programa electoral para las elecciones generales del 29 de noviembre de 2026.",
 "ext": "134 páginas",
 "idioma": "Castellano",
 "estructura": [
  "Las 29 del 29N",
  "Servicios públicos",
  "Economía y empleo",
  "Andalucía en el Estado",
  "Movilidad e infraestructuras",
  "Bienes comunes",
  "Instituciones limpias y libertades",
  "Feminismos",
  "LGTBIQA+",
  "Derechos humanos, migraciones, memoria, paz y pueblo gitano",
  "Cultura, hablas andaluzas, derechos digitales y deporte",
  "Derechos de los animales",
  "Reclamaciones territoriales por provincia"
 ],
 "resumen": "Programa andalucista de 719 propuestas que pone el foco en desprivatizar servicios y sectores (sanidad, educación, ferrocarril, energía), intervenir el mercado de la vivienda y aplicar una reforma fiscal progresiva, junto a la jornada de 32 horas y salarios indexados a la inflación. Su otro eje es Andalucía en el Estado: financiación sin ordinalidad, pago de la deuda histórica, máximo autogobierno como nacionalidad histórica y una lista de inversiones estatales por provincia.",
 "esencial": [
  "Desprivatizar servicios y sectores como sanidad, educación, ferrocarril y energía.",
  "Intervención en el mercado de la vivienda, con alquiler de referencia y parque público ampliado.",
  "Reforma fiscal progresiva, con mayor tributación de grandes fortunas, banca y energéticas.",
  "Jornada de 32 horas sin rebaja de sueldo y salarios indexados a la inflación.",
  "Financiación autonómica sin ordinalidad, pago de la deuda histórica y Andalucía como nacionalidad histórica.",
  "Lista de inversiones estatales por provincia para Andalucía."
 ],
 "pdf": "pdf/adelante.pdf",
 "pdfMB": "0,7 MB",
 "ejes": {
  "E1": {
   "p": -1.5,
   "e": "IRPF con tipos mucho más altos desde 100.000 €, impuesto sobre la riqueza y los latifundios, Sociedades progresivo e impuestos permanentes a banca y eléctricas (p. 58)."
  },
  "E2": {
   "p": -1.5,
   "e": "Tope del alquiler al 20 % de la renta media, prohibición de compra por fondos y sociedades y parque público del 9 % con la Sareb (p. 49-51)."
  },
  "E3": {
   "p": -1.5,
   "e": "Jornada de 32 horas sin rebaja salarial, despido de 50 y 60 días con autorización de la Inspección y salarios indexados al IPC (p. 63)."
  },
  "E4": {
   "p": -1.5,
   "e": "Banca y aseguradora públicas, «desprivatización de toda la energía» y del ferrocarril, empresas públicas en farmacia, alimentación y telecomunicaciones (p. 61, 78 y 82)."
  },
  "E5": {
   "p": -1.5,
   "e": "Fin de conciertos sanitarios y derogación de la Ley 15/1997; eliminación progresiva de la concertada y ninguna universidad privada nueva (p. 36, 42 y 47)."
  },
  "E6": {
   "p": -1.5,
   "e": "Suelos de gasto por ley (8 % del PIB en sanidad, 5 % en educación), reformar las reglas fiscales y auditar la deuda ilegítima (pp. 23, 36, 42, 60); el «impago» que menciona es de deuda autonómica andaluza."
  },
  "E7": {
   "p": -1.5,
   "e": "Topes temporales de precios a alimentos y suministros, vigilancia de márgenes, supermercados públicos y fin del sistema marginalista eléctrico (p. 68 y 82)."
  },
  "E8": {
   "p": -1.5,
   "e": "Revalorización con el IPC real, jubilación ordinaria a los 64 años y anticipada desde los 55 con contrato de relevo (p. 55)."
  },
  "S1": {
   "p": -1.5,
   "e": "Derogar la Ley de Extranjería, regularización extraordinaria, cierre de los CIE y voto de las personas extranjeras residentes (p. 92 y 106)."
  },
  "S2": {
   "p": -1.5,
   "e": "Aborto en la Constitución y en centros públicos de todas las provincias; eutanasia con plazos más ágiles y sin recurso de familiares (p. 38 y 40)."
  },
  "S3": {
   "p": -1.5,
   "e": "Terapias de conversión como delito, opción no binaria en el Registro Civil y prohibición de cirugías a menores intersexuales (p. 104)."
  },
  "S4": {
   "p": -1.5,
   "e": "Derogar la «ley mordaza» y la prisión permanente revisable, prohibir las pelotas de goma y control civil independiente de la policía (p. 94)."
  },
  "S5": {
   "p": -0.5,
   "e": "Suprime la ofensa a los sentimientos religiosos y los «delitos de opinión», pero propone disolver organizaciones que exalten el fascismo y sancionar la exaltación del franquismo (p. 94, 96 y 108)."
  },
  "S6": {
   "p": -1.5,
   "e": "Pacto de Estado con presupuesto, ampliar la Ley Integral de Violencia de Género, feminicidio como delito propio y ley de violencia vicaria (p. 98)."
  },
  "S7": {
   "p": -1,
   "e": "Escuela laica sin religión confesional en horario lectivo, fin de privilegios fiscales religiosos y reversión de las inmatriculaciones (p. 42 y 96)."
  },
  "S8": {
   "p": -1.5,
   "e": "Anular apartados de la Ley de Amnistía de 1977, ampliar la Ley de Memoria Democrática a la tortura posterior a 1978 y prohibir la exaltación franquista (p. 108)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Propone limitar el alquiler al 20 % de la renta media, prohibir la compra por fondos y paralizar desahucios vulnerables.",
   "clave": [
    "Índice estatal de referencia por barrio o municipio para que ningún alquiler supere el 20 % de la renta media de la zona, con contratos de duración indefinida y prórroga sin subida.",
    "Prohibir la compra de vivienda residencial por fondos de inversión y sociedades mercantiles, salvo cooperativas y entidades sin ánimo de lucro, y toda compra especulativa.",
    "Llevar el parque público de alquiler al 9 % del total (hasta el 20 % en zonas de más demanda) con un gasto del 1,5 % del PIB, incorporando todas las viviendas y suelos de la Sareb.",
    "Reformar la Ley de Enjuiciamiento Civil para paralizar los desahucios de hogares vulnerables sin alternativa e ilegalizar las empresas de «desokupación».",
    "Moratoria de pisos turísticos: ninguna licencia nueva en zonas tensionadas, retirada progresiva y cierre de los que funcionan sin licencia."
   ],
   "mas": [
    "Reforma constitucional para pasar el artículo 47 al capítulo de derechos fundamentales, con recurso de amparo, y Ley de emergencia habitacional.",
    "Considerar gran tenedor a quien tenga cinco viviendas en todo el Estado y declarar las zonas tensionadas de forma automática por indicadores, sin depender de cada comunidad.",
    "Obligar a bancos, fondos y grandes tenedores a ofrecer alquiler social antes de cualquier demanda que pueda acabar en desahucio.",
    "Impuesto a la vivienda vacía de grandes tenedores y obligación de alquilar a precio limitado, o ceder al parque público, las que lleven vacías más de un año.",
    "Prohibir por ley la venta de vivienda y suelo públicos, y reservar al menos el 50 % de cada nueva promoción a vivienda protegida, con un 60 % de ella en alquiler social.",
    "Suprimir las exenciones fiscales de SOCIMI y fondos, gravar el alquiler según su precio y permitir recargos de IBI a viviendas turísticas y de inversión.",
    "Prohibir la concesión de nuevas hipotecas a tipo variable para vivienda habitual y declarar nulas las cláusulas de alquiler que prohíben convivir con animales.",
    "Préstamo sin intereses para la fianza, aval público gratuito y seguro público de impago para quien alquile a precio de referencia, además de un portal público de alquiler sin comisiones.",
    "Plan estatal de realojo en dos años de los asentamientos chabolistas de temporeros en Almería y Huelva.",
    "Crear una constructora pública, recuperar para el parque público la VPO vendida a fondos y ceder a la vivienda los cuarteles y suelos vacíos de Defensa, Adif y Puertos."
   ]
  },
  "empleo": {
   "breve": "Propone jornada de 32 horas, salarios indexados a la inflación, indemnizaciones por despido más altas y limitar las horas extra.",
   "clave": [
    "Jornada de 32 horas sin rebaja de sueldo, en dos años en grandes empresas y en cuatro en pymes, y prohibición del turno partido sin rebaja salarial.",
    "Indexar por ley los salarios y el salario mínimo a la inflación, con subida automática de las tablas cuando un convenio lleve un año denunciado sin acuerdo.",
    "Indemnización por despido de 50 días por año en contratos indefinidos y 60 en temporales, con autorización de la Inspección y límites a los despidos colectivos en empresas con beneficios.",
    "Prohibir las horas extraordinarias salvo en casos de emergencia o fuerza mayor, con un registro horario real y más inspección y sanciones.",
    "Cuota de autónomos según ingresos reales, nula sin rendimientos netos, bonificada en vacaciones y al 100 % durante el permiso por nacimiento, con gestoría pública gratuita para los de menos ingresos."
   ],
   "mas": [
    "Abanico salarial máximo de 1 a 5: nadie cobrará en una empresa más de cinco veces el salario más bajo.",
    "Prevalencia del convenio sectorial, que el de empresa solo podrá mejorar, y prohibición de absorber las subidas pactadas con complementos o trienios.",
    "Encarecer en cotización e indemnización los contratos temporales y convertir los fijos discontinuos en indefinidos ordinarios tras un año.",
    "Igual salario en toda la cadena de subcontratación y paso a la plantilla principal tras un año en el mismo centro.",
    "Presunción de relación laboral cuando el 70 % de la facturación de un autónomo proceda de un solo cliente, con inspecciones masivas.",
    "Obligar a formar y recolocar antes de despedir por sustitución con inteligencia artificial, bajo pena de nulidad, y prohibir despidos decididos por algoritmos sin revisión humana.",
    "Representación de la plantilla en los consejos de administración de empresas de más de 250 personas, según el artículo 129.2 de la Constitución.",
    "Estatuto de la hostelería con prohibición de la subcontratación en los hoteles, empezando por las camareras de piso, y plan extraordinario de inspección en turismo.",
    "Integrar plenamente a las empleadas de hogar en el Régimen General y aprobar un estatuto del trabajo en el campo con alojamiento digno para temporeros.",
    "Responsabilidad patrimonial personal de los administradores de empresas reincidentes en incumplimientos laborales y su exclusión de contratos y ayudas públicas."
   ]
  },
  "impuestos": {
   "breve": "Propone un IRPF más progresivo, un impuesto sobre la riqueza y tributación de las grandes empresas según su actividad.",
   "clave": [
    "IRPF más progresivo: rebaja para las rentas bajas, tipos mucho más altos a partir de 100.000 € anuales y rentas del capital tributando al menos como las del trabajo.",
    "Impuesto sobre la riqueza que sustituye a Patrimonio y grava grandes fortunas, gran propiedad inmobiliaria y latifundios, con un mínimo estatal común en Sucesiones y Donaciones.",
    "Impuestos permanentes sobre los beneficios extraordinarios de la banca y las energéticas, y gravamen a la gran distribución alimentaria mientras la cesta básica siga al alza.",
    "IVA superreducido para electricidad, agua, alimentos básicos, productos menstruales y cultura, e IVA reducido para pañales, leche de fórmula y productos de limpieza básicos.",
    "Que las grandes empresas tributen según la actividad y el empleo que generan en cada territorio, no según su sede social, para acabar con el «efecto capitalidad»."
   ],
   "mas": [
    "Impuesto de Sociedades progresivo: tipo reducido para pymes, tipos crecientes para las grandes y supresión de deducciones salvo la reinversión ecosocial.",
    "«Impuesto de retorno sanitario» sobre los beneficios que la sanidad privada obtiene con conciertos, destinado íntegramente a la investigación pública contra el cáncer.",
    "Impuesto de salida a las grandes fortunas que trasladen su residencia fiscal fuera de España, y tributación de las plataformas digitales donde operan.",
    "IVA del 21 % para el alquiler turístico y tasa turística finalista para reparar el impacto ambiental y financiar vivienda.",
    "Fiscalidad verde con impuestos sobre las emisiones, los residuos peligrosos y el consumo de recursos comunes, y en el campo según la huella ecológica de cada producción.",
    "Eximir de declarar a quien gane menos de 22.000 € con dos pagadores y recuperar la deducción en el IRPF por compra de primera vivienda y por alquiler de jóvenes.",
    "Más inspección centrada en grandes grupos e ingeniería fiscal, y exclusión de la contratación pública de empresas con filiales o cuentas en paraísos fiscales.",
    "Auditoría ciudadana de la deuda para identificar la ilegítima y plan para recuperar el dinero público del rescate bancario de 2008.",
    "Reformar la senda de estabilidad para que las reglas fiscales no obliguen a recortar servicios públicos."
   ]
  },
  "pensiones": {
   "breve": "Propone revalorizar las pensiones con el IPC, jubilación a los 64 años y una renta básica universal.",
   "clave": [
    "Revalorización de las pensiones con el IPC real por ley y sistema público blindado en la Constitución, con prohibición de privatizarlo.",
    "Pensiones mínimas y no contributivas iguales al salario mínimo neto, tomando como referencia el de 2026 (1.221 € brutos en 14 pagas), mediante un complemento estatal.",
    "Edad ordinaria de jubilación a los 64 años, anticipada desde los 55 con contrato de relevo y sin coeficientes reductores con 40 años cotizados.",
    "Renta básica universal e incondicional igual al umbral de la pobreza, compatible con otros ingresos y financiada con la reforma fiscal.",
    "Ley estatal de cuidados con una red pública de gestión directa, y Estado financiando el 50 % de la dependencia hasta alcanzar el 1,7 % del PIB."
   ],
   "mas": [
    "Cotización sin topes, proporcional a los ingresos reales, con aportaciones de los impuestos al sistema.",
    "Jubilación anticipada en oficios penosos: pesca, marisqueo, industria naval, campo, conducción profesional y personal sanitario desde los 60 años.",
    "Computar los periodos de cuidado para la pensión y mejorar la de viudedad de quien no tiene pensión propia.",
    "Subsidio por desempleo de mayor cuantía (hoy entre 480 y 570 € al mes) y compatible con un empleo.",
    "Incapacidad temporal pagada al 100 % desde el primer día y prestación puente mientras se resuelve una incapacidad permanente o un juicio por despido.",
    "Sustituir el IPREM, congelado durante años, por un indicador actualizado para conceder ayudas, y plan contra la pobreza infantil para reducirla un 40 %.",
    "Valoración de la dependencia en un máximo de 150 días con silencio positivo y derogación de los recortes del Real Decreto-ley 20/2012.",
    "Estatuto de la cuidadora principal con cotización, desempleo, jubilación y una prestación ligada al salario mínimo según el grado de dependencia.",
    "Ley estatal de servicios sociales con una trabajadora o trabajador social por cada 1.700 habitantes y financiación estatal finalista.",
    "Ayuda a domicilio de gestión directa, sin minutaje, mediante empresas públicas autonómicas, empezando por una andaluza 100 % pública."
   ]
  },
  "sanidad": {
   "breve": "Propone un gasto sanitario del 8 % del PIB, acabar con los conciertos y fijar tiempos máximos de espera.",
   "clave": [
    "Suelo de gasto sanitario del 8 % del PIB fijado por ley, con al menos un 25 % para atención primaria y un 2 % para salud pública.",
    "Derogar la Ley 15/1997, acabar con conciertos y externalizaciones e integrar progresivamente MUFACE, ISFAS y MUGEJU en el Sistema Nacional de Salud.",
    "Ley de garantías de atención primaria: cita en 48 horas, al menos 10 minutos por consulta y 1.500 pacientes por profesional como máximo; salud mental en 15 días.",
    "Tiempos máximos en todo el Estado: 30 días para especialista, 15 para prueba diagnóstica y 120 para operarse; ley del cáncer con tratamiento en 21 días.",
    "Farmacéutica pública estatal con sede en Andalucía que desarrolle, fabrique y distribuya medicamentos genéricos y estratégicos."
   ],
   "mas": [
    "Incluir salud bucodental, visual, ortopédica, podológica y nutricional en la cartera común sin copago, prestada en centros públicos.",
    "Psicología en atención primaria hasta la media europea de 18 psicólogos por 100.000 habitantes, más plazas PIR y una ley de prevención de la conducta suicida.",
    "Fin de las guardias de 24 horas (máximo 12 horas sumando jornada y guardia), supresión de la tasa de reposición y dedicación exclusiva en la pública.",
    "Devolver los copagos a quien tenga dificultades y volver a financiar los 417 medicamentos excluidos en 2012, con compras estatales centralizadas.",
    "Ley de ratios de enfermeras y nuevas categorías en los centros de salud: fisioterapia, dietética, podología, higiene bucodental y una trabajadora social por centro.",
    "Plan 20.000: centro de especialidades cofinanciado por el Estado en cada municipio de más de 20.000 habitantes.",
    "Red pública de cuidados paliativos con hospitalización a domicilio 24 horas y plazos más ágiles para la eutanasia, sin recurso de familiares o allegados.",
    "Eliminar las contenciones mecánicas y farmacológicas en salud mental, con una figura independiente que defienda los derechos de las personas atendidas.",
    "Restringir la publicidad del juego en todos los medios y limitar las máquinas de azar a casinos y espacios sin acceso de menores.",
    "Regular el uso del cannabis terapéutico, excluir del sistema público cualquier pseudoterapia sin evidencia y controlar su publicidad sanitaria."
   ]
  },
  "educacion": {
   "breve": "Propone una única red pública y laica, matrícula universitaria gratuita y ratios máximas de 15 alumnos en Infantil y Primaria.",
   "clave": [
    "Suelo de inversión en educación pública del 5 % del PIB y alcanzar en la legislatura la inversión media por estudiante de la UE y la OCDE (de 6.687 a 8.246 €).",
    "Paralizar y revisar los conciertos y eliminar progresivamente la enseñanza privada-concertada, incorporando su profesorado y alumnado a una sola red pública y laica.",
    "Ratios máximas en toda España: 15 alumnos por aula en Infantil y Primaria, 20 en ESO, 25 en Bachillerato y 12 en FP.",
    "Etapa 0–3 universal, pública y gratuita, sin nuevos conciertos, con salarios y ratios fijados en la normativa básica y una segunda educadora por aula.",
    "Matrícula universitaria gratuita de forma progresiva, ninguna universidad privada nueva y suelo de financiación del 2 % del PIB para las universidades públicas y del 3 % para I+D+i."
   ],
   "mas": [
    "Sacar la religión confesional del horario lectivo y del currículo, y prohibir ceder suelo público a centros privados y privados-concertados.",
    "Libros y material gratuitos desde Infantil, comedor de gestión directa gratuito para rentas medias y bajas y bono de transporte para Bachillerato, FP y universidad.",
    "Suprimir la tasa de reposición docente, cubrir sustituciones en 48 horas, plan estatal de estabilización del profesorado interino y máximo de 18 horas lectivas semanales.",
    "Ratios de apoyo por ley (máximo 10 estudiantes con necesidades específicas por maestra de PT y AL, 250 por orientadora) y ley estatal de inclusión educativa.",
    "Una enfermera presencial en cada centro y atención psicológica estable en cada instituto con financiación estatal.",
    "Educación afectivo-sexual obligatoria en todas las etapas, con prevención de la violencia sexual y el acoso, y una comisión estatal de coeducación.",
    "Plazas públicas de FP para toda la demanda, sin nuevas plazas privadas financiadas, y prácticas remuneradas al menos con el SMI proporcional y cotización desde el primer día.",
    "Plan estatal para climatizar los colegios, retirar el amianto y acabar con las aulas prefabricadas, con calendario público.",
    "Igualar al alza los salarios del profesorado entre comunidades autónomas y ley estatal contra el acoso escolar con protocolo obligatorio.",
    "Sustituir la actual prueba de acceso a la universidad por un modelo que valore el recorrido formativo y crear un estatuto del personal investigador con derechos."
   ]
  },
  "inmigracion": {
   "breve": "Propone una nueva Ley de Extranjería basada en derechos, regularización extraordinaria y cierre de los CIE.",
   "clave": [
    "Derogar la Ley de Extranjería vigente y sustituirla por una nueva ley basada en derechos, que según el programa ponga fin a la irregularidad administrativa.",
    "Regularización extraordinaria en la línea de la iniciativa popular «¡Regularización Ya!», para que ninguna persona quede condenada a la irregularidad.",
    "Cerrar los CIE, empezando por el de Algeciras, y suprimir la disposición que ampara las devoluciones en caliente.",
    "Vías legales y seguras: visados humanitarios, asilo solicitable en embajadas y consulados y retirada de las concertinas de Ceuta y Melilla.",
    "Voto de las personas extranjeras residentes: ratificar el convenio europeo de participación local y reforma constitucional para extenderlo a todas las elecciones."
   ],
   "mas": [
    "Salvamento Marítimo de titularidad pública y fin de la criminalización de las ONG que rescatan a personas migrantes en el mar.",
    "Aplicar el Pacto Europeo de Migración y Asilo sin listas de países seguros, con plazos máximos de registro y protección para desertores y objetores.",
    "Empadronamiento efectivo sin discriminación, con la financiación local ligada a su cumplimiento, y sanidad y escuela sin trabas por la situación administrativa.",
    "Tutela automática de la infancia migrante no acompañada, pacto de Estado con reparto entre comunidades y permiso de residencia y trabajo al cumplir 18 años.",
    "Ley de determinación de la edad con enfoque multidisciplinar y prohibición de detener a menores por motivos migratorios.",
    "Prohibir por ley los controles policiales por perfil racial, con formularios de identificación y un mecanismo independiente de quejas.",
    "Ningún expediente sancionador a quien denuncie un delito estando en situación irregular, y separación de los datos de extranjería y policiales.",
    "Autorización de residencia para víctimas de violencia machista sin esperar a sentencia firme y para víctimas de explotación sin condicionarla a colaborar.",
    "Ley integral contra el racismo con una Autoridad de Igualdad de Trato con recursos y presencia territorial.",
    "Homologación ágil de títulos con menos tasas y oficinas de extranjería con plantilla suficiente y atención presencial en varios idiomas."
   ]
  },
  "energia": {
   "breve": "Propone una empresa pública de energía renovable, salida del gas en 2030 y prohibir el corte de luz por impago.",
   "clave": [
    "Ley de emergencia climática con objetivos anuales verificables de reducción de emisiones y demanda energética, y al menos el 2 % del PIB para políticas ambientales.",
    "Empresa pública de energía renovable con filial andaluza que produzca, distribuya y venda electricidad, y recuperación pública de las redes y las grandes centrales.",
    "Salida del gas del sistema eléctrico en 2030 y de la industria en 2035, sin nuevas infraestructuras gasistas, y paralización definitiva del almacén de gas Marismas en Doñana.",
    "Revertir la liberalización ferroviaria y las externalizaciones en Adif y Renfe, y Cercanías o media distancia en todas las localidades andaluzas de más de 20.000 habitantes en diez años.",
    "Prohibir el corte de luz y gas por impago a hogares vulnerables, con bono social de luz y agua aplicado de oficio, al 100 % y pagado por las compañías."
   ],
   "mas": [
    "Acabar con el sistema marginalista, desvincular de forma permanente el precio de la luz del gas y sacar gas y nuclear de la taxonomía verde europea.",
    "Fin de las subvenciones a fósiles y nuclear, moratoria de hidrocarburos, prohibición del fracking en Andalucía y plan estatal de cierre del almacén de residuos radiactivos de El Cabril.",
    "Zonas de exclusión vinculantes y moratoria a las macroplantas renovables en suelo rural; ninguna planta solar ni de baterías en suelo forestal o protegido.",
    "Moratoria a los grandes centros de datos hasta evaluar su consumo, con techo de agua y energía por cuenca y prohibición de usar agua potable para refrigerarlos.",
    "Billete único estatal mensual para trenes y autobuses públicos, como el alemán, y transporte gratuito para menores, personas desempleadas, mayores de 65 y rentas bajas.",
    "Destinar la mitad de los fondos previstos para nuevas líneas de alta velocidad a Cercanías, media distancia y mantenimiento, y priorizar el ferrocarril frente a nuevas carreteras.",
    "Ofrecer alternativa ferroviaria en los trayectos de menos de 600 km y aplicar ecotasas al transporte aéreo, además de carriles bici e incentivos a su uso.",
    "Ley del ciclo del agua: caudales ecológicos y abastecimiento primero, freno al regadío intensivo, sin trasvases ni compraventa de derechos y cierre de pozos ilegales.",
    "Gestión pública del ciclo urbano del agua, mínimo vital gratuito y prohibición de cortes por impago.",
    "Ley estatal de Doñana, reconocimiento de su personalidad jurídica y moratoria de construcción en el litoral con derribo del hotel de El Algarrobico."
   ]
  },
  "economia": {
   "breve": "Propone una banca pública, supermercados públicos de precios justos y cláusulas espejo en los acuerdos comerciales.",
   "clave": [
    "Banca pública con control democrático que dé crédito a pymes, personas autónomas, cooperativas y vivienda pública, con cuentas básicas gratuitas.",
    "Red de supermercados públicos que compren a precios justos a la producción local, sin intermediarios, y garanticen precios asequibles en productos de primera necesidad.",
    "Presencia pública en energía, farmacia, alimentación y telecomunicaciones, aseguradora pública para seguros obligatorios y servicio funerario público a precio justo.",
    "Límites temporales a los precios de alimentos y suministros básicos ante subidas abusivas, con vigilancia de márgenes y prohibición efectiva de la venta a pérdidas.",
    "Ayudas de la PAC ligadas al empleo y a vivir en el territorio en lugar de a las hectáreas, y Ley de soberanía alimentaria con uso cooperativo de tierras infrautilizadas."
   ],
   "mas": [
    "Retirar ayudas y contratos públicos a las empresas con beneficios o ayudas que cierren o despidan.",
    "Plan estatal de reindustrialización verde en las comarcas con más paro y reconversión de la industria naval, aeronáutica, militar y del automóvil sin pérdida de empleo.",
    "Plan de turismo: red pública de hoteles, campings y apartahoteles, un «Imserso» para todas las edades, piscinas públicas en cada municipio y reparto de beneficios hoteleros con las plantillas.",
    "Paralizar la expansión del olivar superintensivo, sin ayudas a plantaciones de fondos, y etiquetado obligatorio del modelo de cultivo del aceite.",
    "Prohibir las macrogranjas y las granjas peleteras, con transición de la ganadería intensiva a la extensiva, y prohibir los insecticidas neonicotinoides.",
    "Cláusulas espejo en los acuerdos comerciales para que las importaciones cumplan las mismas exigencias laborales, sanitarias y ambientales.",
    "Banco público de tierras para jóvenes y mujeres, con exención en el IRPF a jubilados que cedan sus tierras a menores de 40 años.",
    "Ley de economía social con recompra de empresas por su plantilla, reserva obligatoria de contratación pública para cooperativas y límite a las comisiones de las plataformas.",
    "Software libre como norma en las administraciones, nube pública para datos sanitarios y educativos y registro público auditable de los algoritmos de la Administración.",
    "Derogar la Ley 18/2013 que regula la tauromaquia como patrimonio cultural, suprimir toda subvención taurina y aplicar el IVA general a los toros, en transición hacia su abolición."
   ]
  },
  "igualdad": {
   "breve": "Propone blindar el aborto en la Constitución, Pacto de Estado con financiación finalista y tipificar las terapias de conversión.",
   "clave": [
    "Blindar el aborto en la Constitución y garantizarlo en centros públicos de todas las provincias, sin conciertos ni copago y sin subvenciones a organizaciones que acosen a las mujeres.",
    "Pacto de Estado contra la violencia machista con financiación finalista y plurianual que llegue a los ayuntamientos, y tipificar el feminicidio como delito propio.",
    "Permisos por nacimiento iguales, intransferibles y pagados al 100 %, primero de seis meses y después de un año.",
    "Prestación universal por crianza de entre 100 y 200 € al mes por hijo o hija hasta los 18 años, para todas las familias.",
    "Tipificar las terapias de conversión en el Código Penal e incluir la opción no binaria en el Registro Civil y los documentos oficiales."
   ],
   "mas": [
    "Ley contra la violencia vicaria y suspensión cautelar del régimen de visitas del agresor con orden de alejamiento o en recurso de acogida.",
    "Equiparar ayudas e indemnizaciones a víctimas de violencia machista y huérfanos con las de víctimas del terrorismo, y control telemático del agresor desde riesgo medio.",
    "Prohibir la gestación subrogada, que el programa rechaza por mercantilizar el cuerpo de las mujeres, y reforzar la adopción pública.",
    "Ley integral contra la trata y la explotación sexual y laboral, con asistencia a las víctimas sin condicionarla a la denuncia.",
    "Ley de igualdad retributiva con salarios desglosados por sexo y paridad obligatoria en instituciones, consejos de administración y órganos públicos.",
    "Equiparar a las familias monoparentales con las numerosas y reconocer como numerosas las familias con dos hijos.",
    "Prohibir las cirugías genitales y tratamientos de asignación de sexo no necesarios en bebés y menores intersexuales, y plazos máximos garantizados para la sanidad trans.",
    "Reserva del 1 % de las plazas de la Administración General del Estado para personas trans e incentivos a las pymes que las contraten.",
    "Ludotecas obligatorias en empresas y administraciones de más de 50 personas y unión civil de amistad con permisos de cuidado.",
    "Ley de menopausia con derechos sanitarios, laborales y sociales, y ley contra la violencia obstétrica con observatorio y plan de humanización del parto."
   ]
  },
  "seguridad": {
   "breve": "Propone derogar la «ley mordaza» y la prisión permanente revisable, y suprimir los aforamientos y el delito de ofensa a sentimientos religiosos.",
   "clave": [
    "Derogar la Ley de Seguridad Ciudadana de 2015 («ley mordaza») con anulación de las sanciones por protestar, y prohibir las pelotas de goma.",
    "Suprimir del Código Penal el delito de ofensa a los sentimientos religiosos y los «delitos de opinión».",
    "Derogar la prisión permanente revisable, el endurecimiento penal de los pequeños hurtos y la ley de desalojos rápidos.",
    "Anular los apartados de la Ley de Amnistía de 1977 que impiden investigar los crímenes del franquismo y declarar imprescriptibles los de lesa humanidad.",
    "Suprimir los aforamientos de parlamentarios, Gobierno y Corona, prohibir los indultos por corrupción e inhabilitar 15 años a los condenados por corrupción."
   ],
   "mas": [
    "Control civil independiente de la policía, identificación visible de los agentes y fin de la presunción de veracidad policial en las sanciones administrativas.",
    "Disolver los grupos neonazis y neofascistas y las fundaciones que glorifiquen el franquismo, y sancionar la exaltación pública del franquismo.",
    "Ampliar la Ley de Memoria Democrática a víctimas de tortura posteriores a 1978, nueva ley de secretos oficiales y reparación a las familias de bebés robados.",
    "Exhumaciones con tutela judicial y Fiscalía desde el primer hallazgo, banco público de ADN y fondos estatales suficientes.",
    "Más jueces hasta la media europea y elección directa del Consejo General del Poder Judicial por la ciudadanía.",
    "Fiscal General elegido por el Congreso por mayoría reforzada, con mandato largo no renovable y sin posibilidad de cese por el Gobierno.",
    "Autoridad independiente contra la corrupción con protección legal para el personal público denunciante y un Tribunal de Cuentas con capacidad sancionadora.",
    "Juzgados especializados contra el blanqueo del narcotráfico en el Campo de Gibraltar, con policía de proximidad y prevención en los barrios.",
    "Unidades policiales especializadas en delitos de odio y formación para erradicar discursos antidemocráticos en las fuerzas armadas y policías.",
    "Centros adecuados fuera de prisión para personas con trastorno mental grave y traspaso a Andalucía de la ejecución penitenciaria."
   ]
  },
  "exterior": {
   "breve": "Propone rechazar el objetivo del 5 % de la OTAN, un referéndum sobre la permanencia y romper relaciones con Israel.",
   "clave": [
    "Rechazar el plan europeo de rearme y el objetivo del 5 % del PIB de la OTAN, con reducción progresiva del gasto militar y publicación del gasto real.",
    "Iniciar un proceso que culmine en un referéndum para que la ciudadanía decida sobre la permanencia de España en la OTAN.",
    "Renegociar los convenios de Rota y Morón con el objetivo de cerrar las bases extranjeras e incorporar a España al Tratado sobre la Prohibición de las Armas Nucleares.",
    "Romper relaciones con Israel mientras dure la ocupación, embargo total de armas incluido el material de doble uso y el tránsito por Rota, y suspender el acuerdo UE-Israel.",
    "Volver a la posición anterior a 2022 sobre el Sáhara Occidental, apoyando su autodeterminación, y respaldar el derecho de autodeterminación del Rif."
   ],
   "mas": [
    "Prohibir la exportación de armas a Estados que vulneran el derecho internacional, como Arabia Saudí y Emiratos, con control parlamentario previo.",
    "Priorizar la negociación en Ucrania y en cualquier conflicto, crear una unidad de mediación en Exteriores y recuperar la jurisdicción universal recortada en 2014.",
    "Ayuda oficial al desarrollo del 0,7 % de la renta nacional en la legislatura, con al menos un 10 % para construcción de paz.",
    "Ley de diligencia debida para que las empresas respondan de vulneraciones de derechos humanos y ambientales en su cadena de suministro.",
    "Ningún servicio militar, ni obligatorio ni voluntario, y comisión de investigación sobre abusos y muertes en la mili durante la democracia.",
    "Educación para la paz en lugar de los programas de cultura de defensa y sin presencia militar en ferias, colegios y universidades.",
    "Apoyo a la UNRWA y a la causa por genocidio ante la Corte Internacional de Justicia, y solidaridad con las organizaciones democráticas marroquíes.",
    "Rechazar escudo antimisiles y submarinos nucleares en Gibraltar y condicionar cualquier acuerdo sobre Gibraltar a los derechos de los trabajadores transfronterizos.",
    "Exigir a Estados Unidos la retirada de la tierra contaminada de Palomares, con controles independientes."
   ]
  },
  "estado": {
   "breve": "Propone financiación sin ordinalidad, condonar la deuda andaluza y máximo autogobierno para Andalucía como nacionalidad histórica.",
   "clave": [
    "Nuevo sistema de financiación autonómica sin ordinalidad, con población ajustada por criterios sociales, un fondo transitorio de nivelación y el pago de la deuda histórica del Estatuto.",
    "Condonar la deuda andaluza generada por la infrafinanciación, con quita del FLA e intereses hacia el 0 %, y auditoría de la deuda con impago de la contraída contra el interés andaluz.",
    "Máximo nivel de autonomía para Andalucía como nacionalidad histórica en cualquier reforma constitucional, con un modelo confederal como horizonte.",
    "Cargos públicos con el mismo sueldo que tenían antes (o el salario medio si venían del paro), sin pagas vitalicias y con mandatos limitados y revocables.",
    "Traspasar a Andalucía Cercanías y media distancia, la gestión exclusiva del Guadalquivir, la Inspección de Trabajo y las prestaciones por desempleo, y desplegar una policía autonómica."
   ],
   "mas": [
    "Ceder a las comunidades al menos el 55 % del IRPF y el 70 % del IVA y los impuestos especiales, e integrarlo todo en el fondo de garantía.",
    "Inversión estatal en Andalucía según población y ejecutada, con informe anual al Congreso, y traslado de sedes como el Instituto Español de Oceanografía, el IDAE y la AICA.",
    "Derogar la Ley de Racionalización y Sostenibilidad de la Administración Local de 2013 y flexibilizar la regla de gasto para que los ayuntamientos usen su superávit.",
    "Voto a los 16 años, Senado territorial, referéndum obligatorio de toda reforma constitucional e iniciativa legislativa popular con menos firmas y firma digital.",
    "RTVE independiente con producción repartida entre comunidades, prohibición de que bancos controlen medios y ninguna publicidad institucional a medios que difundan bulos.",
    "Revertir las inmatriculaciones de la Iglesia amparadas en la norma de 1946, patronato público para la Mezquita de Córdoba y fin de los privilegios fiscales de las confesiones.",
    "Atención presencial sin cita obligatoria en las oficinas del Estado, ningún trámite solo digital y plan de reinternalización de los servicios externalizados.",
    "Institución pública de las hablas andaluzas y reforma de la Ley del Deporte para que las selecciones andaluzas compitan oficialmente.",
    "Devolver a Andalucía la Dama de Baza y los Murillo de Santa María la Blanca y Los Venerables, y traspasar los archivos de la Guerra Civil.",
    "Inversiones ferroviarias y viarias por provincia, como el corredor litoral de la Costa del Sol, la línea Algeciras–Bobadilla electrificada y la finalización de la SE-40."
   ]
  }
 }
},
{
 "id": "pcte",
 "name": "PCTE",
 "nombre": "Partido Comunista de los Trabajadores de España",
 "ambito": "Estatal",
 "doc": "Programa de lucha. Construyamos la oposición obrera",
 "tipo": "El propio documento afirma que «no es un programa electoral», sino un conjunto de reivindicaciones para la movilización. No indica fecha.",
 "ext": "24 páginas",
 "idioma": "Castellano",
 "estructura": [
  "Trabajo, salario y tiempo de vida",
  "Control obrero en la producción",
  "Vivienda",
  "Servicios públicos y protección social",
  "Cesta de la compra y campo",
  "Juventud trabajadora",
  "Mujeres trabajadoras",
  "Cultura y ciencia",
  "Paz e internacionalismo",
  "Libertades",
  "Derechos políticos y sindicales",
  "Por el socialismo"
 ],
 "resumen": "El PCTE presenta el documento como un «programa de lucha» y no como un programa electoral: un conjunto de reivindicaciones para construir una «oposición obrera» desde los centros de trabajo, los barrios y los centros de estudio. Se centra en salarios y jornada, control obrero de las empresas, vivienda (bajada del 50 % de los alquileres y expropiación de viviendas vacías de grandes tenedores), servicios públicos de gestión exclusivamente pública, salida de la OTAN y de la UE y derogación de la Ley de Seguridad Ciudadana. Su objetivo final declarado es el «socialismo-comunismo».",
 "esencial": [
  "Salarios revisados según el IPC real y jornada reducida sin pérdida de salario.",
  "Control obrero de las empresas y paso a propiedad estatal de empresas viables que cierren.",
  "Vivienda: prohibir desahucios de hogares trabajadores y rebajar los alquileres a la mitad.",
  "Servicios públicos de gestión exclusivamente pública, incluida la sanidad.",
  "Salida de la OTAN y de la Unión Europea, con reducción del gasto militar.",
  "Derogación de la Ley de Seguridad Ciudadana, conocida como «ley mordaza»."
 ],
 "pdf": "pdf/pcte.pdf",
 "pdfMB": "0,3 MB",
 "ejes": {
  "E1": {
   "p": -0.5,
   "e": "Sin propuestas fiscales generales; solo pide eliminar los incentivos fiscales a los planes privados y de empleo de pensiones (p. 14)."
  },
  "E2": {
   "p": -1.5,
   "e": "Bajada inmediata del 50 % de los alquileres y expropiación sin indemnización de viviendas vacías y especulativas de bancos, fondos y grandes tenedores para el parque público (pp. 11-12); no suprime el alquiler privado."
  },
  "E3": {
   "p": -2,
   "e": "Jornada de 35 horas sin rebaja salarial, readmisión obligatoria, prohibición de despidos colectivos en empresas con beneficios y «más mecanismos de control obrero»: veto suspensivo de la representación de los trabajadores ante reorganizaciones (pp. 7-8)."
  },
  "E4": {
   "p": -1.5,
   "e": "Propiedad estatal bajo control obrero de los sectores estratégicos (energía, transporte, telecomunicaciones, capacidades industriales) y paso a propiedad estatal de empresas viables que cierren (pp. 9-10); no plantea nacionalizar toda la economía."
  },
  "E5": {
   "p": -1.5,
   "e": "Derogar la Ley 15/1997, prohibir conciertos y externalizaciones e integrar la concertada en una red pública única (p. 13)."
  },
  "E6": {
   "p": -1,
   "e": "Pide más gasto en servicios y protección social y reducir el gasto militar (pp. 13-14, 19); no menciona déficit ni reglas fiscales."
  },
  "E7": {
   "p": -1.5,
   "e": "Precios máximos para una cesta básica y márgenes máximos para la gran distribución (p. 15)."
  },
  "E8": {
   "p": -1.5,
   "e": "Jubilación a los 60 años sin penalización (55 en trabajos penosos), revalorización con el IPC real y fin de incentivos a planes privados (pp. 7, 14)."
  },
  "S1": {
   "p": -1.5,
   "e": "Cierre de los CIE, fin de las devoluciones en caliente y mecanismo permanente de regularización (p. 20)."
  },
  "S2": {
   "p": -0.5,
   "e": "Todas las interrupciones del embarazo en hospitales públicos (p. 17); no trata la eutanasia."
  },
  "S3": {
   "p": -0.5,
   "e": "Protección de las personas LGTB frente al despido, el acoso y la discriminación (p. 20); sin otras medidas legales."
  },
  "S4": {
   "p": -1.5,
   "e": "Derogar la Ley de Seguridad Ciudadana, prohibir pelotas de goma y tanquetas e investigación independiente de la actuación policial (p. 20)."
  },
  "S5": {
   "p": -0.5,
   "e": "Derogar los delitos de injurias a la Corona y ultrajes a símbolos, pero también ilegalizar organizaciones fascistas y franquistas (p. 20)."
  },
  "S6": {
   "p": -0.5,
   "e": "Garantizar vivienda, ingresos y atención a las víctimas de violencia machista (p. 17); no propone cambios legislativos."
  },
  "S7": {
   "p": -0.5,
   "e": "Sistema educativo exclusivamente público y laico (p. 13); no trata acuerdos con la Santa Sede."
  },
  "S8": {
   "p": -1,
   "e": "Ilegalizar organizaciones fascistas y franquistas, disolver fundaciones que enaltecen la dictadura y rechazar equiparar fascismo y comunismo (p. 20)."
  }
 },
 "temas": {
  "vivienda": {
   "breve": "Propone prohibir desahucios de hogares trabajadores, bajar los alquileres un 50 % y expropiar viviendas vacías de grandes tenedores.",
   "clave": [
    "Prohibir cualquier desahucio de hogares trabajadores de su vivienda habitual, sea cual sea la causa y el propietario.",
    "Bajar los alquileres un 50 % de inmediato; después, precios máximos ligados a los salarios medios de la zona y contratos indefinidos por defecto.",
    "Si el propietario es un banco, fondo o gran tenedor y el inquilino no puede pagar: alquiler social obligatorio de no más del 15 % de sus ingresos.",
    "Parque público de al menos el 10 % del total de viviendas; expropiación sin indemnización de las viviendas vacías o de uso especulativo de bancos, fondos y grandes tenedores.",
    "Limitar la vivienda turística al 0,5 % de las viviendas de cada localidad y prohibir los cortes de agua, luz y calefacción a hogares trabajadores."
   ],
   "mas": [
    "Si el propietario necesita la vivienda para vivir en ella, la Administración garantiza antes del desalojo una alternativa digna y estable en el mismo barrio.",
    "Cuando el inquilino no pueda pagar y el propietario no sea un gran tenedor, la Administración realoja al hogar en el parque público, en el mismo barrio y en las mismas condiciones.",
    "Aplicar las mismas normas de protección, duración y precio a todo alquiler de vivienda habitual, incluidos los de temporada y los de habitaciones.",
    "Fijar el precio de los alquileres públicos según los ingresos de cada hogar y prohibir la venta o descalificación de cualquier vivienda pública o protegida.",
    "Construir el parque público mediante promoción directa, cooperativismo social, autoconstrucción, rehabilitación, compra de inmuebles y uso del suelo público, protegido de forma permanente.",
    "Ninguna ejecución hipotecaria de vivienda habitual de hogares trabajadores: reestructuración de la deuda a cargo de la banca, dación en pago opcional con derecho a seguir en alquiler social y cancelación de deudas de quienes ya perdieron su casa.",
    "Reservar un tercio del parque público de alquiler para jóvenes trabajadores, con alquiler según ingresos, en lugar de ayudas al alquiler que, según el documento, acaban en manos de los caseros."
   ]
  },
  "empleo": {
   "breve": "Propone jornada de 35 horas sin reducción salarial, revisión salarial según el IPC y readmisión en despidos injustificados.",
   "clave": [
    "Jornada de 35 horas sin reducción salarial como paso hacia las 30; máximo de 1.540 horas anuales y prohibición de las bolsas de horas.",
    "Revisión salarial automática según el IPC real, sin topes, y recuperación del poder adquisitivo perdido desde 2021; subidas iguales en euros para todas las categorías.",
    "Cinco semanas de vacaciones; contrato fijo tras 6 meses encadenados en un año; prohibición de las ETT.",
    "Readmisión obligatoria, a elección del trabajador, en caso de despido injustificado; prohibir los despidos colectivos en empresas con beneficios."
   ],
   "mas": [
    "Registro horario controlado por la representación de los trabajadores y prohibición de la distribución irregular de la jornada; la reducción de jornada no podrá compensarse con menos plantilla, más ritmo u horas extra.",
    "Acabar con los falsos autónomos y con las prácticas no laborales que cubren puestos de trabajo.",
    "Mismo salario y derechos en las subcontratas; integración de las actividades estructurales en la plantilla de la empresa principal.",
    "Autorización administrativa previa para todo despido colectivo, con informe vinculante de la representación de los trabajadores, apertura de las cuentas del grupo e indemnizaciones disuasorias.",
    "Derecho de las plantillas a paralizar los trabajos ante riesgos graves y a negarse a cumplir órdenes que pongan en riesgo la vida.",
    "Negociar con los trabajadores la introducción de nuevas tecnologías, de modo que el aumento de productividad se traduzca en menos jornada y no en menos empleo.",
    "Solo prácticas curriculares, con tutor, límite de horas, máximo de becarios por plantilla y compensación no inferior al salario mínimo proporcional; prohibición de las prácticas extracurriculares.",
    "Cotización y derechos desde el primer día para toda actividad en la empresa, incluidas las prácticas.",
    "Fin de las dobles escalas salariales y de las peores condiciones por edad: ningún contrato formativo por debajo del salario de convenio."
   ]
  },
  "impuestos": {
   "breve": "No incluye propuestas fiscales concretas, salvo eliminar los incentivos fiscales a los planes privados de pensiones.",
   "clave": [
    {
     "n": "No incluye propuestas fiscales concretas, salvo eliminar los incentivos fiscales a los planes privados de pensiones."
    }
   ],
   "mas": []
  },
  "pensiones": {
   "breve": "Propone jubilación a los 60 años sin penalización, pensiones no inferiores al salario mínimo y revalorización con el IPC real.",
   "clave": [
    "Jubilación a los 60 años sin penalización y a los 55 en trabajos penosos o peligrosos.",
    "Ninguna pensión por debajo del salario mínimo y revalorización con el IPC real.",
    "Prestación por desempleo mientras dure el paro, nunca inferior al salario mínimo; baja médica al 100 % desde el primer día.",
    "Eliminar los incentivos fiscales a los planes de pensiones privados y de empresa."
   ],
   "mas": [
    "Red pública universal de cuidados: escuelas infantiles, ayuda a domicilio, centros de día, residencias, dependencia, discapacidad y apoyos comunitarios.",
    "Gestión pública directa de los cuidados fundamentales, con empleo estable, salarios dignos y plantillas suficientes.",
    "Fin de la lista de espera de la dependencia.",
    "Recuperación del poder adquisitivo perdido por los pensionistas cuando la inflación supere la revalorización."
   ]
  },
  "sanidad": {
   "breve": "Propone derogar la Ley 15/1997, prohibir nuevos conciertos y recuperar los servicios de gestión pública directa.",
   "clave": [
    "Derogar la Ley 15/1997 y prohibir nuevos conciertos y externalizaciones en sanidad; recuperar los servicios a gestión pública directa.",
    "Destinar el 25 % del gasto sanitario a atención primaria y reforzar salud mental y bucodental.",
    "Desarrollar capacidad pública en medicamentos e investigación farmacéutica.",
    "Todas las interrupciones del embarazo, en hospitales públicos."
   ],
   "mas": [
    "Plantillas públicas suficientes y estables en los servicios públicos: toda necesidad permanente cubierta con empleo permanente.",
    "Reforzar también la atención especializada, la prevención y la investigación en la sanidad pública.",
    "Prohibir nuevos conciertos, concesiones y externalizaciones también en los servicios sociales, con recuperación a gestión pública directa bajo control obrero."
   ]
  },
  "educacion": {
   "breve": "Propone una red educativa exclusivamente pública y laica, becas-salario y plaza pública de 0 a 3 años para todos.",
   "clave": [
    "Sistema educativo exclusivamente público, gratuito y laico; integrar los centros concertados en una red pública única.",
    "Gratuidad de material, transporte, comedor y residencia; bajar las ratios.",
    "Beca-salario equivalente al salario mínimo para estudiantes de familias trabajadoras.",
    "Derogar la Ley de Convivencia Universitaria."
   ],
   "mas": [
    "Plaza en residencia pública para quien estudie fuera de su localidad.",
    "Plaza pública de 0 a 3 años para todos los niños, enlazada con el permiso por nacimiento.",
    "Ninguna sanción académica por organizar huelgas, piquetes o protestas en los centros de estudio.",
    "Abrir patios, polideportivos y bibliotecas escolares por las tardes y los fines de semana, y un centro juvenil público en cada barrio.",
    "Una biblioteca pública en cada barrio, abierta por las tardes y los fines de semana, y más centros culturales, escuelas artísticas e instalaciones deportivas en barrios obreros y medio rural.",
    "Gratuidad de museos y equipamientos públicos, uso gratuito de instalaciones deportivas públicas para menores y desempleados y precio máximo en la actividad cultural subvencionada.",
    "Convenio y cotización en todo trabajo cultural contratado por las administraciones, también el subcontratado, sin falsos autónomos.",
    "Fin de los contratos por proyecto encadenados en investigación: plazas estables para el personal investigador.",
    "Ningún euro de investigación pública para fines militares: los fondos de I+D militar, a salud, energía, alimentación y medio ambiente."
   ]
  },
  "inmigracion": {
   "breve": "Propone cerrar los CIE, un mecanismo permanente de regularización y mismos derechos laborales para migrantes y nacionales.",
   "clave": [
    "Cerrar los CIE y acabar con las identificaciones por perfil étnico y las devoluciones en caliente.",
    "Mecanismo permanente de regularización para trabajadores sin papeles.",
    "Mismos derechos laborales para trabajadores migrantes y nacionales."
   ],
   "mas": [
    "Ninguna situación administrativa puede utilizarse para pagar menos; plenos derechos laborales y sindicales para los trabajadores del campo, la pesca y la industria alimentaria.",
    "Incluir en la prohibición de desahucios de vivienda habitual a quienes habitan sin contrato, en subarriendo o sin papeles.",
    "Combatir el racismo y la xenofobia desde la igualdad de derechos y la unidad de los trabajadores frente a la división por origen."
   ]
  },
  "energia": {
   "breve": "Propone energía, transporte y telecomunicaciones de propiedad estatal bajo control de los trabajadores y prohibir subcontratas.",
   "clave": [
    "Energía, transporte y telecomunicaciones como sectores de propiedad estatal bajo control de los trabajadores.",
    "Prohibir las subcontratas en el diseño de infraestructuras y el mantenimiento del transporte."
   ],
   "mas": []
  },
  "economia": {
   "breve": "Propone acceso de los trabajadores a las cuentas, precios máximos para la cesta básica y bancos públicos de tierras.",
   "clave": [
    "Acceso de los representantes de los trabajadores a las cuentas de las empresas y veto suspensivo ante externalizaciones y reorganizaciones.",
    "Paso a propiedad estatal de empresas viables que vayan a cerrar por decisión de sus dueños.",
    "Precios máximos para una cesta básica y márgenes máximos para la gran distribución.",
    "Bancos públicos de tierras y capacidades públicas de almacenamiento y distribución de alimentos."
   ],
   "mas": [
    "Ante cierres o deslocalizaciones: apertura completa de cuentas, estudio obligatorio de alternativas y devolución de las ayudas públicas si se incumplen compromisos.",
    "Política industrial planificada según necesidades sociales, con empresas estatales, inversión estable, formación profesional, capacidad científica propia y control democrático.",
    "Hacer cumplir la prohibición de comprar por debajo del coste de producción, con inspección en la que participen pequeños productores y jornaleros y publicación de todas las sanciones.",
    "Transparencia sobre costes, contratos y márgenes comerciales, con el precio pagado en origen visible junto al de venta.",
    "Recuperación productiva de tierras abandonadas y acceso colectivo de los productores a maquinaria, tecnología, investigación, servicios veterinarios y financiación.",
    "Mantener las producciones y capacidades necesarias para un abastecimiento alimentario suficiente y a precios accesibles.",
    "Servicios públicos, transporte, vivienda, conectividad y actividad productiva que permitan vivir en el medio rural con los mismos derechos que en las ciudades.",
    "Prohibir las casas de apuestas, el juego en línea y su publicidad."
   ]
  },
  "igualdad": {
   "breve": "Propone un permiso por nacimiento de 52 semanas, prohibir la prostitución y rechazar la gestación subrogada.",
   "clave": [
    "Permiso por nacimiento de 52 semanas, igual, intransferible y pagado al 100 %.",
    "Nulidad del despido y readmisión automática hasta que el hijo cumpla 3 años.",
    "Prohibir la prostitución y el proxenetismo y rechazar la gestación subrogada.",
    "Proteger a las personas LGTB frente al despido y la discriminación en todas las empresas."
   ],
   "mas": [
    "Igual salario por el mismo trabajo y por trabajos de igual valor.",
    "Derecho a pasar a jornada completa para toda trabajadora a tiempo parcial que lo pida; mejora de salarios y plantillas en cuidados, limpieza, comercio, sanidad, educación y servicios sociales.",
    "Garantizar vivienda, ingresos, empleo y atención sanitaria, psicológica y jurídica a las mujeres que sufren violencia machista para romper la dependencia económica.",
    "Alternativas materiales para las mujeres prostituidas y persecución de las agencias que intermedian la gestación subrogada desde España.",
    "Extender la protección de las personas LGTB al acoso laboral, el acceso a la vivienda y las agresiones, también en empresas de menos de 50 trabajadores."
   ]
  },
  "seguridad": {
   "breve": "Propone derogar la Ley de Seguridad Ciudadana, prohibir las pelotas de goma e ilegalizar las organizaciones fascistas.",
   "clave": [
    "Derogar la Ley de Seguridad Ciudadana y anular las sanciones por huelgas y protestas; prohibir pelotas de goma y vehículos blindados en manifestaciones.",
    "Ilegalizar las organizaciones fascistas y franquistas.",
    "Derogar los delitos de injurias a la Corona y ultrajes a símbolos.",
    "Ilegalizar las empresas de desalojo de viviendas."
   ],
   "mas": [
    "Prohibir el uso de vehículos blindados y material militar en el control de huelgas, piquetes y manifestaciones, e investigación independiente de las actuaciones policiales.",
    "Disolver las fundaciones que enaltecen la dictadura, sin espacio ni fondos públicos, y rechazar cualquier ley que equipare el fascismo con el comunismo.",
    "Prohibir contratar empresas de desocupación y perseguir penalmente las coacciones y los desalojos ilegales que practican.",
    "Derogar también los delitos de injurias a las instituciones."
   ]
  },
  "exterior": {
   "breve": "Propone salida de la OTAN y de la UE, embargo militar total a Israel y reconocer la República Árabe Saharaui Democrática.",
   "clave": [
    "Salida de la OTAN y de la Unión Europea; regreso de las tropas desplegadas en el exterior y plena soberanía sobre las bases.",
    "Reducir el gasto militar, anular los Programas Especiales de Modernización y reconvertir la industria militar.",
    "Embargo militar total a Israel y ruptura de relaciones.",
    "Reconocer la República Árabe Saharaui Democrática y un referéndum de autodeterminación."
   ],
   "mas": [
    "Que España retire su apoyo al plan de autonomía marroquí para el Sáhara Occidental y renuncie a acuerdos con Marruecos a costa del pueblo saharaui y sus recursos.",
    "Ruptura de los acuerdos que permiten el uso del territorio español por fuerzas militares extranjeras.",
    "Destinar los recursos del rearme a vivienda, servicios, empleo e industria civil, garantizando el empleo de las plantillas de la industria militar en su reconversión."
   ]
  },
  "estado": {
   "breve": "Propone organizar una «oposición obrera» desde los centros de trabajo, con derecho a representación en empresas pequeñas.",
   "clave": [
    "El documento se dirige a organizar una «oposición obrera», no a gobernar; su objetivo final declarado es el «socialismo-comunismo».",
    "Derecho a elegir representante también en empresas de menos de seis trabajadores y 10 horas anuales pagadas de asamblea.",
    "Consultas vinculantes a las plantillas antes de firmar convenios o despidos colectivos."
   ],
   "mas": [
    "Nulidad y readmisión obligatoria en todo despido o sanción por actividad sindical, con protección desde el primer momento a quienes promuevan asambleas, candidaturas o secciones sindicales.",
    "Limitar los servicios mínimos abusivos y la ampliación de lo que se declara servicio esencial.",
    "Rendición periódica de cuentas de los representantes sindicales ante la asamblea de trabajadores del centro.",
    "Plantea como perspectiva estratégica que la clase obrera «dispute el poder» y construya una sociedad con propiedad social de los medios de producción y economía planificada democráticamente."
   ]
  }
 }
}
];
