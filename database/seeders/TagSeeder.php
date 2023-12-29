<?php

namespace Database\Seeders;

use App\Models\Tag;
use App\Models\TagType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    public function run(): void
    {
        $brand = TagType::query()->create(['name' => 'Brand', 'slug' => 'brand']);
        $material = TagType::query()->create(['name' => 'Material', 'slug' => 'material']);
        $event = TagType::query()->create(['name' => 'Event', 'slug' => 'event']);

        Tag::query()->insert($this->format($this->getEvents(), $event));
        Tag::query()->insert($this->format($this->getBrands(), $brand));
        Tag::query()->insert($this->format($this->getMaterials(), $material));
    }

    private function format(array $tags, Model $type): array
    {
        return array_map(fn (string $tag) => [
            'name' => $tag,
            'slug' => Str::slug($tag),
            'tag_type_id' => $type->id,
            'created_at' => now(),
            'updated_at' => now(),
        ], $tags);
    }

    private function getEvents(): array
    {
        return [
            'BeforeAndAfter',
            'BeforeAndAfter_After',
            'BeforeAndAfter_Before',
            'Canuary',
            'Canuary2024',
            'Cleanup4Sarah',
            'Cleanup4Sarah2024',
            'CornishSplicedTreasureHunt-SpecialFind',
            'CornishSplicedTreasureHunt-item-01',
            'CornishSplicedTreasureHunt-item-02',
            'CornishSplicedTreasureHunt-item-03',
            'CornishSplicedTreasureHunt-item-04',
            'CornishSplicedTreasureHunt-item-05',
            'CornishSplicedTreasureHunt-item-06',
            'CornishSplicedTreasureHunt-item-07',
            'CornishSplicedTreasureHunt-item-08',
            'CornishSplicedTreasureHunt-item-09',
            'CornishSplicedTreasureHunt-item-10',
            'CornishSplicedTreasureHunt-item-bonus',
            'CornishSplicedTreasureHunt2024-01',
            'CornishSplicedTreasureHunt2024-02',
            'CornishSplicedTreasureHunt2024-03',
            'CornishSplicedTreasureHunt2024-04',
            'CornishSplicedTreasureHunt2024-05',
            'CornishSplicedTreasureHunt2024-06',
            'OTHER (For an Event that is not in the picklist)',
            'PeukMeuk',
            'PeukMeuk2024',
            'RedBullLitter',
            'ShowYourImpact',
            'ShowYourImpact_DeAfvalraperBladel',
            'ShowYourImpact_DeGrachtWacht',
            'ShowYourImpact_DeZwerfafvalRuimers',
            'ShowYourImpact_ZaanseZwerfvuilEstafette',
            'ShowYourImpact_ZwerfieRotterdam',
            'WorldCleanupDay',
            'WorldCleanupDay2024',
        ];
    }

    private function getMaterials(): array
    {
        return [
            'Aluminium',
            'Bronze',
            'Ceramic',
            'Copper',
            'Fiberglass',
            'Glass',
            'Iron or Steel',
            'Latex',
            'Metal',
            'OTHER (For a Material that is not in the picklist)',
            'Paper',
            'Plastic',
            'Plastic (ABS)',
            'Plastic (HDPE)',
            'Plastic (LDPE)',
            'Plastic (PC)',
            'Plastic (PE)',
            'Plastic (PEN)',
            'Plastic (PET)',
            'Plastic (PP)',
            'Plastic (PS)',
            'Plastic (PVC)',
            'Plastic (PVDC)',
            'Wood',
        ];
    }

    private function getBrands(): array
    {
        return [
            'Applegreen',
            'Asahi',
            'Avoca',
            'Ballygowan',
            'Bewleys',
            'Acadia',
            '9',
            '86',
            '100smoothie',
            '7UP',
            'AaDrink',
            'Abant',
            'Absolut',
            'Ace',
            'Active02',
            'Actimel',
            'Activa',
            'Adnams',
            'Affligem',
            'AHVitaminDrink',
            'Akhtamar',
            'Alesto',
            'Alexmeijer',
            'Alfa',
            'Almhof',
            'Amber Leaf',
            'Amicelli',
            'Amigo',
            'Amstel',
            'Anadin',
            'Anchor',
            'Andalooz',
            'Antaflu',
            'Appelsientje',
            'Appletiser',
            'AppleBandit',
            'Aqua Carpatica',
            'Aquarius',
            'Aqua Vale',
            'Arctic Coffee',
            'Argus',
            'Arizona',
            'Arla',
            'Asda',
            'Autodrop',
            'Axe',
            'Ayran',
            'Bacardi',
            'Baha',
            'Bahlsen',
            'Balconi',
            'Balisto',
            'Bang',
            'Barleduc',
            'Barnies Foods',
            'Barr',
            'Barratt',
            'BASF',
            'BasilSeed',
            'Bastogne',
            'Bavaria',
            'Bazooka',
            'Bear',
            'Becks',
            'Belkin',
            'Benecol',
            'BenJerrys',
            'Ben Shaws',
            'Benson & Hedges',
            'Best',
            'Better',
            'Beypazari',
            'Bic',
            'Bifi',
            'Bigga',
            'Biotiful',
            'BirdBrewery',
            'Birra Moretti',
            'Black',
            'blck',
            'Blu',
            'BlueBastard',
            'Bobapoke',
            'Bobbys',
            'Boels',
            'Bolletje',
            'Bols',
            'Bombay',
            'Boost',
            'Boots',
            'Boston',
            'Bounty',
            'Bozu',
            'Bp',
            'Brand',
            'Break',
            'Breaker',
            'Breezer',
            'Brewdog',
            'Brinky',
            'Britvic',
            'Bros',
            'BrouwerijtIJ',
            'Brouwers',
            'Btween',
            'Bubbelfrisss',
            'Bubblicious',
            'Bud',
            'Bullit',
            'BumBum',
            'BurgerKing',
            'Busta',
            'Butterkist',
            'Buxton',
            'Cafe Nero',
            'Calippo',
            'Calypso',
            'Camaro',
            'Camel',
            'Camden Town Brewery',
            'Campina',
            'Canderel',
            'CandyCan',
            'Candy King',
            'Candyman',
            'Cannabis',
            'CapriSun',
            'Captainmorgan',
            'Carabao',
            'Carlsberg',
            'Carling',
            'Celebrations',
            'Charlies',
            'Chaudfontaine',
            'Chekov',
            'Cheetos',
            'Chesterfield',
            'Chio',
            'ChivasRegal',
            'Chocomel',
            'Chubby',
            'Chupachups',
            'Ciftlik',
            'Claro',
            'CocaCola',
            'Cocio',
            'Coco',
            'Coke',
            'Compton Orchard',
            'Conimex',
            'Coolbest',
            'Cooldrink',
            'Coop',
            'Coors',
            'Cornetto',
            'Corona',
            'CraftNation',
            'Cricket',
            'Cristal',
            'Cristaline',
            'Croky',
            'Crystal',
            'CrystalClear',
            'Cutters Choice',
            'Daelmans',
            'Daim',
            'Dairylea',
            'Dalga',
            'Dalphin',
            'Damel',
            'Damla',
            'DanielSiepman',
            'Danio',
            'Danoontje',
            'Davidoff',
            'Deal',
            'Deen',
            'Deka',
            'DeKlok',
            'Dekuyper',
            'Delekkerste',
            'Desperados',
            'Dextro',
            'DeZaanseHoeve',
            'Didi',
            'Djoezz',
            'Dock',
            'Dolu',
            'Dominos',
            'Dommelsch',
            'Doom Bar',
            'Doritos',
            'Dors',
            'Doublemint',
            'DouweEgberts',
            'Dove',
            'Download',
            'DrFoots',
            'Drinklicious',
            'Droste',
            'DrPepper',
            'DrToms',
            'Drum',
            'Dubbeldrank',
            'Dubbelfrisss',
            'Dunhill',
            'Durex',
            'Duvel',
            'Duyvis',
            'Earth',
            'Eastmans',
            'Elfbar',
            'ElTequito',
            'Embassy',
            'Emerge',
            'Enrgydrnk',
            'Erikli',
            'Eristoff',
            'Esbjaerg',
            'Esso',
            'Estathe',
            'Etos',
            'EukalyptusMentholPervDrTom',
            'Euro Shopper',
            'Evian',
            'Export',
            'Extran',
            'Fa',
            'Fahnenbrau',
            'Family',
            'Fanta',
            'Faxe',
            'Febo',
            'Fernandes',
            'Festini',
            'Fiesta',
            'Fietenoil',
            'Finkbrau',
            'Finley',
            'FireMoon',
            'Firerose',
            'FirstChoice',
            'Fishermansfriend',
            'Flax',
            'Floralys',
            'Flugel',
            'Foco',
            'Focus',
            'Fortune',
            'Foxx',
            'Franziskaner',
            'Freedent',
            'Freeway',
            'Freez',
            'Freezy',
            'Freshlife',
            'Frezzh',
            'Fria',
            'Frisia',
            'Fristi',
            'Frontaal',
            'Fruitshoot',
            'Fruittella',
            'Fudo',
            'Fuerza',
            'Fumot',
            'Fuzetea',
            'Gallgall',
            'Gauloises',
            'Gazeuse',
            'Generator',
            'Gerolsteiner',
            'GetMoreVits',
            'Gig',
            'Gladiator',
            'Gofast',
            'Gofresh',
            'Goldenpower',
            'Goldfield',
            'Gooseisland',
            'Gordons',
            'Goreme',
            'Grazzano',
            'Greggs',
            'GreyGoose',
            'Grolsch',
            'Guarana',
            'Guinness',
            'Gulpener',
            'Gumus',
            'Gurpinar',
            'GVB',
            'Gwoon',
            'Hamidiye',
            'Hardthof',
            'Haribo',
            'Harnas',
            'Hawai',
            'HealthyPeople',
            'Heets',
            'Heineken',
            'Hell',
            'Hema',
            'Hennessy',
            'Hero',
            'HertogJan',
            'Highspeed',
            'Highway',
            'Hipro',
            'Hoegaarden',
            'Hollandia',
            'Holtland',
            'Hoppe',
            'Hypermalt',
            'Icecappuccino',
            'Iconix',
            'Idel',
            'Illy',
            'Innocent',
            'Ipa',
            'Ivgbar',
            'JackDaniels',
            'Jawbreaker',
            'Jillz',
            'Jimbeam',
            'Jimmys',
            'Jobecker',
            'Johma',
            'JohnnieWalker',
            'JPS',
            'JRS',
            'Jumbo',
            'Jupiler',
            'Ka',
            'Kanjers',
            'Kasztelan',
            'Katja',
            'Kaubo',
            'Keizerskroon',
            'Kent',
            'Kfc',
            'Killa',
            'Kinder',
            'Kiosk',
            'Kitkat',
            'Kizilay',
            'Kleenex',
            'Klene',
            'Knoppers',
            'Knuspi',
            'Koetjes',
            'Kompaan',
            'KongStrong',
            'Kopiko',
            'Kordaaat',
            'Kordaat',
            'Kornuit',
            'Kruidvat',
            'Lachouffe',
            'Lager',
            'Landerbrau',
            'Lavazza',
            'LaVersoie',
            'Lavish',
            'Lays',
            'Lech',
            'Leffe',
            'Lemco',
            'Lemon',
            'Lemony',
            'Lidl',
            'Liefmans',
            'Liga',
            'Lion',
            'Lipton',
            'LM',
            'Loise',
            'Lomza',
            'LookOLook',
            'Looza',
            'LostMary',
            'Lotus',
            'Louise',
            'Loveau',
            'Lovka',
            'Lowlander',
            'Lu',
            'LuckyStrike',
            'Lulu',
            'Luxus',
            'Maaza',
            'Magnum',
            'Malibu',
            'Maltesers',
            'Maoam',
            'Markant',
            'Marlboro',
            'Mars',
            'Martini',
            'Mascotte',
            'Maxim',
            'McDonalds',
            'Megaforce',
            'Meharis',
            'Melkan',
            'Melkunie',
            'Mentos',
            'Merba',
            'Merci',
            'Mezzomix',
            'Migo',
            'Milbona',
            'Milka',
            'Milkyway',
            'Milsani',
            'Minutemaid',
            'Mirinda',
            'Mixxedup',
            'MMs',
            'Moersleutel',
            'Mogumogu',
            'Monster',
            'Moods',
            'MountainDew',
            'MrCool',
            'Mullermilk',
            'Muszynianka',
            'Mythos',
            'Napoleon',
            'Naturalcool',
            'Nestea',
            'Newyork',
            'Ngine',
            'Nice',
            'Nightwatch',
            'Nimm2',
            'Nitro',
            'Nivea',
            'Nocco',
            'Noebron',
            'Nofear',
            'NS',
            'Nuts',
            'NXT-Gooiland70Beverwijk',
            'O2Life',
            'Oasis',
            'Octagon',
            'Odorex',
            'Oke',
            'Ola',
            'Oldjamaica',
            'Olvarit',
            'Optimel',
            'Orange',
            'Orangina',
            'Oreo',
            'OrganicsByRedbull',
            'Organix',
            'Oshee',
            'OTHER (For a Brand that is not in the picklist)',
            'Pablo',
            'PallMall',
            'Palm',
            'Panter',
            'Parliament',
            'Passoa',
            'Peachtree',
            'Peijenburg',
            'Pelican',
            'Pepsi',
            'Perla',
            'Perlenbacher',
            'Peroni',
            'Piacetto',
            'Pickwick',
            'Picnic',
            'Piknik',
            'Pitt',
            'Pleinsud',
            'Plus',
            'Pombar',
            'Poms',
            'Powerbooster',
            'Powerup',
            'PremiumDutch',
            'Prince',
            'Pringles',
            'Puff',
            'PureFruit',
            'Puregold',
            'PurePlusAloeVera',
            'Pyke',
            'Quellbrunn',
            'Raak',
            'Rademakers',
            'Raffaello',
            'Ramune',
            'RandM',
            'Realtropical',
            'Redband',
            'Redbull',
            'Reeses',
            'Reign',
            'Remia',
            'Rexona',
            'Richmond',
            'Rittersport',
            'Rivella',
            'River',
            'Rizla',
            'Rochefort',
            'Rocheval',
            'Rockstar',
            'Rodeo',
            'Romy',
            'Roosvicee',
            'Rothmans',
            'Royalclub',
            'Royaldutch',
            'Ruba',
            'Rubicon',
            'Rumcola',
            'Rush',
            'Salento',
            'Salt',
            'Sanpellegrino',
            'SantaEmilia',
            'Saskia',
            'Schultenbrau',
            'Schutters',
            'Schweppes',
            'Segafredo',
            'Selpak',
            'Shakura',
            'Shell',
            'Sifres',
            'Siglitos',
            'Silifke',
            'Sinas',
            'Sis',
            'Sisi',
            'Skittles',
            'Slammers',
            'Sloanes',
            'Slurpie',
            'Smart',
            'Smarties',
            'Smint',
            'Smirnoff',
            'Smoeltjes',
            'Smokingblue',
            'Smooth',
            'SnelleJelle',
            'Snickers',
            'Solan',
            'Solevita',
            'SolMar',
            'Solo',
            'SoloPro',
            'Somersby',
            'Sondey',
            'Sonnema',
            'Soulwater',
            'Sourcy',
            'Spa',
            'Span',
            'Spar',
            'Speedstar',
            'Sportlife',
            'Sportwater',
            'Sprite',
            'Starbucks',
            'Starsbar',
            'StellaArtois',
            'Stelz',
            'Stimorol',
            'Strike',
            'Stuyvesant',
            'Subway',
            'Sugarland',
            'Sultana',
            'Sunlolly',
            'Supermalt',
            'Surango',
            'TakeOff',
            'Taksi',
            'TastingGoodVitaminDrink',
            'Teasers',
            'Tempo',
            'Tequila',
            'Texels',
            'TheBulldog',
            'TheEnergyDrink',
            'Tictac',
            'Tikkels',
            'Tikkie',
            'Timeout',
            'Tim Hortons',
            'Tinq',
            'Toblerone',
            'Toffifee',
            'Toffix',
            'Tonys',
            'Topdrop',
            'Topo',
            'Total',
            'Trancetto',
            'Triplex',
            'Trocadero',
            'Trolli',
            'Troost',
            'TropicalAloeVera',
            'Tropicana',
            'Troppie',
            'Tuborg',
            'Tuc',
            'Twix',
            'TwoChefsBrewing',
            'Tymbark',
            'Tyskie',
            'Uggo',
            'Uludag',
            'Una',
            'Upbar',
            'Valvoline',
            'vanAnaarBeter',
            'Vangils',
            'Vanmelle',
            'Vannelle',
            'VanPur',
            'Veltins',
            'Venco',
            'Veneto',
            'Verkade',
            'Vezet',
            'Vifit',
            'Viking',
            'Vimto',
            'Viper',
            'VitaminWell',
            'Viteau',
            'Vittel',
            'VluggeJapie',
            'Vogue',
            'Vomar',
            'Vrieslollie',
            'Warheads',
            'Warka',
            'Warsteiner',
            'Wasa',
            'Werthersoriginal',
            'West',
            'Westminster',
            'WhiteClaw',
            'Wicky',
            'Wieckse',
            'Wildbean',
            'Wilhelmina',
            'WilliamLawsons',
            'Winston',
            'Wisla',
            'Xbull',
            'Xoozz',
            'Xxx',
            'XXXAmsterdamGenetics',
            'Xylifresh',
            'Yakult',
            'YoghoYogho',
            'Yoki',
            'Yono',
            'Zeeman',
            'Zonnatura',
            'Zubr',
            'Zuivelhoeve',
            'Zwitsal',
            'Zywiec',
            'ZywiecZdroj',
        ];
    }
}
