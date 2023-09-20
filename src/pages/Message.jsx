import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { Image } from '@mui/icons-material';
import { display } from '@mui/system';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Message = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs sx={{ width: {} }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Vice Chancellor" {...a11yProps(0)} />
                    <Tab label="Pro-Vice Chancellor (Administration)" {...a11yProps(1)} />
                    <Tab label="Pro-Vice Chancellor (Academic)" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {/* <Image alt="" src="https://ssl.du.ac.bd/fontView/images/leader/1638107718VC_Sir_PP_Picture_1.original.jpg" /> */}
                <Card sx={{ padding: 2 }}>
                    <CardMedia
                        image="https://ssl.du.ac.bd/fontView/images/leader/1638107718VC_Sir_PP_Picture_1.original.jpg"
                        style={{ height: 240, width: 200 }} />
                    <Typography variant='h6'>Professor Dr. Md. Akhtaruzzaman</Typography>
                    <Typography variant='h4' marginBottom={4}>Vice Chancellor</Typography>
                    <Typography textAlign={'justify'}>Welcome to the University of Dhaka’s website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh!<br /><br />

                        Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region. It was initially meant to provide tertiary education to people who didn’t have access to higher studies till then. Subsequently, it has contributed significantly to the socio-cultural and political development of what was once East Bengal and then East Pakistan, and is now Bangladesh.<br /><br />

                        Since its establishment, the university has been fulfilling the hopes and aspirations of its students and their parents. It has, of course, not only been a lighthouse of learning, but has also acted as a torch-bearer of the people of the region in issues such as democracy, freedom of expression, and the need for a just and equitable society. It has always been associated with high quality education and research in which students as well as faculty members and alumni have played their parts. The University of Dhaka’s role has expanded beyond its classrooms and research labs during different crises the country has had to face since 1947. In many ways, thus, the university is unique, for it has played a major role in the creation of the independent nation-state of Bangladesh in 1971.<br /><br />

                        Writing at this time, I am proud to note that the University of Dhaka has not only fulfilled but also exceeded the aspirations of those who set it up. It has been acclaimed as the best educational institution of the region, and one of the leading universities of the subcontinent. It is an incubator of ideas and has nurtured renowned scientists and academicians, great leaders, administrative and business officials, and entrepreneurs. Its proud alumni include the Father of the Nation Bangabandhu Sheikh Mujibur Rahman, and the incumbent Prime Minister, Sheikh Hasina, his august daughter. Most of the country’s presidents, prime ministers, policymakers, politicians and CEOs of leading organizations, researchers and activists have been products of this institution.<br /><br />

                        The University of Dhaka’s doors are open for people from all classes, religions and parts of the country, and, indeed, also for international students. Its campus, too, regularly hosts different national and international events and festivals where people from every corner can and do participate. It is a hub, for breeding and nourishing liberal, secular and humanistics values.<br />

                        At the time when our country is dreaming to become a developed nation by 2041 and has made a firm commitment to achieve the Sustainable Development Goals (SDGs) by 2030, and in an age when we are witnessing the emergence of spirited youths all set to participate in the Fourth Industrial Revolution (4IR), I can affirm that the University of Dhaka is well prepared to meet all future challenges and is ready to lead the nation once again with its acquired experience, available resources, dedicated administrators, experienced faculty members and talented students and employees.<br /><br />

                        Having been associated with the university for almost 40 years, first as a student, then as a faculty member, and later in various administrative capacities, it is a great honor and proud privilege for me to be here to not only witness but also to contribute to its centenary celebrations from where I am. Let me emphasize too that it is the singular privilege of all of us at the University of Dhaka to be celebrating its centenary in the year that Bangladesh is celebrating its golden jubilee of independence.<br /><br />

                        I would like to request you all to explore the legacy, beauty, and history of this great institution of national, regional and international importance through this website. I hope it will be of use to you as you venture into the knowledge network of the university and acquaint yourself with its history, achievements, centers of learning, residential facilities and other attributes. My office staff and I will be more than happy to listen to you in case you want to visit us in person at a mutually convenient time. </Typography>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Card sx={{ padding: 2 }}>
                    <CardMedia
                        image="https://ssl.du.ac.bd/fontView/images/leader/1629097468Photo-%20Dr.%20Muhammad%20Samad%204%20-%20Copy.jpg"
                        style={{ height: 240, width: 200 }} />
                    <Typography variant='h6'>Professor Dr. Muhammad Samad</Typography>
                    <Typography variant='h4' marginBottom={4}>Pro-Vice Chancellor (Administration)</Typography>
                    <Typography textAlign={'justify'}>Muhammad Samad was born in a remote village in 1956 in the Jamalpur District of Bangladesh. He earned his Bachelor of Social Science (BSS) with honors and master’s degrees in Social Welfare, mostly known as Social Work, from the Institute of Social Welfare and Research (ISWR), University of Dhaka, Bangladesh. He completed his PhD on the participation of the rural poor in development programs of government and NGOs in Bangladesh.<br /><br />

                        Dr. Muhammad Samad has worked as a visiting professor at Winona State University (WSU), Minnesota, USA twice in 2005 and 2009 respectively. He has worked as a Fellow of Katherine A. Kendall Institute of International Social Work Education, CSWE, USA in 2009. He has been serving as the President of Bangladesh Council for Social Work Education (BCSWE) since 2012. He has been elected as Board Member of Asian and Pacific Social Work Education (APASWE) for the term of 2013-17.<br /><br />

                        Dr. Muhammad Samad served as the Vice Chancellor, University of Information Technology & Sciences (UITS), Bangladesh. He is a renowned professor and teaching for thirty-seven years and also former Director at the Institute of Social Welfare & Research, University of Dhaka. He has done extensive research on the rural poor, indigenous peoples and the underprivileged classes in Bangladesh. He has thirty articles published in national and international journals. A well-known social scientist Dr. Muhammad Samad has authored and edited more than ten books in the field of social science and development. Highlights include Social Service Activities of Religious Institutions in Bangladesh: The Perspective of Social Work Education and Practice, The Invisible People: Poverty and Resiliency in the Dhaka Slums (2008; Jointly with Dr. Cathleen Jo Faruque), Publish from Baltimore, USA, Participation of the Rural Poor in Government and NGO Programs: A Comparative Study (2002), Awareness About the Role of UN in Bangladesh: An Opinion Survey (2000), The Santal Community in Bangladesh: Problems and Prospects (2003; Jointly), Human Rights: 50 Years of Advancement 1999, (Ed. in Bengali), The Fourth World Conference on Women: Beijing Declaration and Platform of Action (Ed. 1997 in Bengali), Role of NGOs in Rural Poverty Alleviation of Bangladesh (1984, in Bengali) and The Struggle of Poets and Poems (A collection essays ed. in Bengali, 1994).<br /><br />

                        Dr. Muhammad Samad is an accomplished and distinguished/celebrated and popular poet of Bengali language. He has been writing poems since his school days. The first book of his verses Ekjan Rajnaitik Netar Menifesto (Manifesto of a Political Leader) was published in 1983. His other published books of verses are Ami Tomader Kabi (I am Your Poet), Selected Poems (bi-lingual), Premer Kabita (Love Poems), Kabitasangraha (Selected Collection of Poems), Aaj Sharater Akashe Purnima  (The Full Moon in the Autumn Sky), Cholo, Tumul Bristite Bhiji (Let Us Be Drenched in Torrential Rain), Podabe Chandan Kaath (Will Burn Sandal Wood) Ami Noi Indrajit Megher Adale (I am not Indrajit Behind the Clouds) and  Utsaber Kabita (Poems From Festival ed. Bengali poems rendered in the National Poetry Festival).<br /><br />

                        His works have been translated in Swedish, Greek, Chinese, Serbian, Hindi, Sinholi etc. languages and published from several countries. Dr. Muhammad Samad is serving as the President of National Poetry Council of Bangladesh.<br />

                        He has received number of awards for his contribution to Bengali poetry and literature that made him widely known and honored. Among those, Trivuj Literary Award, Poet Jasimuddin Literary Award, Poet Jibanananda Das Award, Poet Sukanta Literary Award, City-Ananda Alo Literary Award, Syed Mujtaba Ali Sahitya Award, Poet Vishnu De Award, Kabitalap Award, Prizes 2018: International Best Poet (China) and Bangla Academy Sahitya Purashkar 2020 (Bangla Academy Literary Award) are remarkable..<br /><br />

                        He has visited China, Denmark, Greece, India, Indonesia, Italy, Japan, Malaysia, Myanmar, Nepal, Norway, South Korea, Thailand, Sweden, Vietnam, United Kingdom and United State of America on invitation as academic and poet.</Typography>
                </Card>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Card sx={{ padding: 2 }}>
                    <Box sx={{alignItems:'center'}}>
                            <CardMedia
                                image="https://ssl.du.ac.bd/fontView/images/leader/16122640371609740797Prof-Maksud-Kamal.jpg"
                                style={{ height: 240, width: 200}} />
                            <Typography variant='h6'>Professor Dr. A. S. M. Maksud Kamal</Typography>
                            <Typography variant='h4' marginBottom={4}>Pro-Vice Chancellor (Academic)</Typography>
                    </Box>
                    <Typography textAlign={'justify'}>Professor Dr. ASM Maqsood Kamal was born on 21 November 1966 in a noble Muslim family in Lakshmipur district. His father late Alhaj Farid Ahmed and mother late Machuma Khatun were social philanthropists and scholars. His father was also a well-known and established businessman. His Excellency Mr. AKM Shahjahan Kamal MP previously served as the Minister of Civil Aviation and Tourism of the People's Republic of Bangladesh. Prof. Maqsood Kamal obtained first division/class in all levels of educational life. He passed B.Sc (Hons) and M.Sc in 1st class from Geology Department of Dhaka University. Subsequently, he received a Master's degree in Applied Engineering Geology from the International Institute for Geo-Information Science and Earth Observation (ITC), a famous space science institution at the University of Twente in the Netherlands, and a Doctor of Engineering degree in Earthquake Engineering from the Tokyo Institute of Technology in Japan in 2004. achieved He has published over fifty scientific articles in national and international peer-reviewed/impact factor journals and numerous policy-making reports under his direct supervision in various public and private organizations at the national level. He is also serving as a member of the Editorial Board of several local and foreign journals. He has been appointed as a visiting professor at the world renowned University College of London (UCL), UK from 2 April 2022 to March 2027.<br /><br />

                        Professor Dr. Maksud Kamal joined the Department of Geology of Dhaka University as a lecturer in 2000. Prior to this, he worked as a scientific officer of Bangladesh Space Research and Remote Sensing Organization (SPARSO) for six years and as a research fellow and researcher at Dhaka University Bose Center. He was appointed as a professor in 2010. From 2012, he was appointed the founding chairman of the Department of Disaster Science and Management under the Faculty of Earth and Environmental Sciences and successfully served as chairman till 2017. From 2012 to 2020, he served as the Dean of the Faculty of Earth and Environmental Sciences. He also served as Principal of Masterda Suryasen Hall for two terms. Currently serving as a Syndicate and Senate member of the University. Also, Dr. Kamal was elected general secretary three times and president four times of Dhaka University Teachers Association. He was the Secretary General of Bangladesh University Teachers Association Federation and served three consecutive terms as President. He has always played an active role in improving the quality of education in the country and establishing the dignity and rights of teachers.<br /><br />

                        Professor Dr. Maqsood Kamal has also served as Technical Lead Advisor/Expert Member in various projects of various Government Ministries and Institutions including serving as Urban Disaster Specialist at UNDP, Iran and UNDP/CDMP, Bangladesh. He has collaboration and research projects with reputed universities of different countries of the world (Japan, China, UK etc.). His thematic writings are published in the national media.</Typography>
                </Card>
            </TabPanel>
        </Box>
    )
}
export default Message;