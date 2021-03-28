import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

export default class HistoryScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'black'}}>
                <View style={{flexDirection: 'row',  top: 17, height: 80}}>
                    <Image style = {{ height: 50, width: 50}} source = {require("../assets/map.png")}/>
                    <Text style={{color: 'white', fontSize: 30, top: 10, fontWeight: 'bold'}}>History</Text>
                </View>
                <ScrollView style={{flex: 1}}>
                    <Text style={{fontSize:28, color: 'beige', paddingLeft: 10}}>Early history</Text>
                    <Text style={{fontSize:18, color: 'beige', top: 20, paddingLeft: 10}}>     The region bounded by the Mureș, the Tisza and the Danube was very fertile and offered favorable conditions for food and human livelihood yet in 4000 BC. Archeological remains attested the presence of a population of farmers, hunters and artisans, whose existence was favored by mild climate, fertile soil and abundant water and forests.
                            The first identifiable civilization in Banat were the Dacians who left traces of their past. Several Romanian historians have advanced the idea that the current location of Timișoara corresponds to the Dacian settlement of Zurobara. Although its location is unknown, the coordinates given by geographer Ptolemy in Geographike Hyphegesis place it in the northwest of Banat. </Text>
                    <Text style={{fontSize:28, color: 'beige', paddingLeft: 10, top:20}}>Middle Ages</Text>
                    <Text style={{fontSize:18, color: 'beige', top: 40, paddingLeft: 10}}>     It is assumed that in the 9th century Knyaz Glad ruled over these lands. He accepted Hungarian sovereignty. However, so far no document dating back to that period has been discovered. Timișoara was first officially mentioned in 1212 as the Roman castrum Temesiensis or castrum regium Themes. However, this year is disputed by many historians who are of the opinion that the city's first documentary mention comes from 1266, when heir apparent Stephen V of Hungary donates part of the Tymes fortress, built by his father, Béla IV, to Count Parabuch. The city was destroyed by the Tatars in the 13th century, but the city was rebuilt and grew considerably during the reign of Charles I of Hungary, who, upon his visit there in 1307, ordered the strengthening of the fortress with stone walls and the building of a royal palace. The palace was built by Italian craftsmen and was organized around a rectangular court having a main body provided with a dungeon or a tower. He even moved the royal seat from Buda to Timișoara between 1316 and 1323. Timișoara's importance also grew due to its strategic location, which facilitated control over the Banat plain.</Text>
                    <Text style={{fontSize:28, color: 'beige', paddingLeft: 10, top:40}}>1552–1716: Ottoman occupation</Text>
                    <Text style={{fontSize:18, color: 'beige', top: 60, paddingLeft: 10}}>     The fall of Belgrade in 1521 and the defeat at Mohács in 1526 caused the division of the Hungarian Kingdom in three parts, and Banat became the object of contention between the Habsburg Kingdom of Hungary and Ottomans. After a failed siege in 1551, the Turks regrouped and returned with a new strategy. On 22 April 1552, a 160,000-strong army led by Kara Ahmed Pasha conquered the city and transformed it into a capital city in the region (Eyalet of Temeşvar). </Text>
                    <Image style={{width: 300, height: 200, top: 90, alignSelf: 'center'}} source={require("../assets/Timisoara.jpg")}/>
                    <Text style={{fontSize:28, color: 'beige', paddingLeft: 10, top:100}}>1716–1860: Habsburg rule</Text>
                    <Text style={{fontSize:18, color: 'beige', top: 120, paddingLeft: 10}}>     After the victory at Petrovaradin on 5 August 1716, the Austrian army led by Prince Eugene of Savoy decided to conquer Timișoara. The Ottoman military, the kuruc and the Turkish civilian population were forced to leave the city after a 48-day siege marked by repeated bombings that destroyed much of the city's buildings. After the Treaty of Passarowitz (1718), the Banat of Temeswar became the province of the Habsburg Monarchy and was proclaimed "possession of the Crown" with a military administration which ruled Timișoara until 1751 when it was replaced by a civil one.</Text>
                    <Text style={{fontSize:28, color: 'beige', paddingLeft: 10, top:120}}>After World War I</Text>
                    <Image style={{width: 300, height: 200, top: 140, alignSelf: 'center'}} source={require("../assets/Corso.jpg")}/>
                    <Image style={{width: 300, height: 200, top: 150, alignSelf: 'center'}} source={require("../assets/revolutie.jpg")}/>
                    <Text style={{fontSize:18, color: 'beige', top: 160, paddingLeft: 10}}>     During World War II, Timișoara suffered damage from both Allied and Axis bombing raids, especially during the second half of 1944. On 23 August 1944, Romania, which until then was a member of the Axis, declared war on Nazi Germany and joined the Allies. The German and Hungarian troops attempted to take the city by force throughout September, but without success. In December 1989, Timișoara witnessed a series of mass street protests in what was to become the Romanian Revolution. On 20 December, three days after bloodshed began there, Timișoara was declared the first city free of Communism in Romania.</Text>
                    <Text> {"\n\n\n\n\n\n\n\n\n\n"} The End </Text>
                </ScrollView>
            </View>
            
        );
    };
}