<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = now();
        Item::query()->insert([
            //smoking
            ['name' => 'Cigarette Butt', 'slug' => 'butts', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Lighter', 'slug' => 'lighters', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Cigarette Box', 'slug' => 'cigarette_box', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Tobacco Pouch', 'slug' => 'tobacco_pouch', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Rolling Paper', 'slug' => 'rolling_paper', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Cigarette Filter', 'slug' => 'filters', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Cigarette Filter Box', 'slug' => 'filter_box', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Vape Pen', 'slug' => 'vape_pen', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Vape Oil', 'slug' => 'vape_oil', 'created_at' => $now, 'updated_at' => $now],

            //alcohol
            ['name' => 'Beer Bottle', 'slug' => 'beer_bottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Spirit Bottle', 'slug' => 'spirit_bottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Wine Bottle', 'slug' => 'wine_bottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Beer Can', 'slug' => 'beer_can', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Broken Glass', 'slug' => 'broken_glass', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Beer Bottle Tops', 'slug' => 'bottle_tops', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Alcohol Packaging', 'slug' => 'alcohol_packaging', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Pint Glass', 'slug' => 'pint', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Six-pack Rings', 'slug' => 'six_pack_rings', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic Cups', 'slug' => 'alcohol_plastic_cups', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Alcohol Other', 'slug' => 'alcohol_other', 'created_at' => $now, 'updated_at' => $now],

            //art
            ['name' => 'Litter Art', 'slug' => 'litter_art', 'created_at' => $now, 'updated_at' => $now],

            //coffe
            ['name' => 'Coffee Cup', 'slug' => 'coffee_cup', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Coffee Lid', 'slug' => 'coffee_lid', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Coffee Other', 'slug' => 'coffee_other', 'created_at' => $now, 'updated_at' => $now],

            //food
            ['name' => 'Sweet Wrapper', 'slug' => 'sweet_wrapper', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Paper/Cardboard Packaging', 'slug' => 'paper_food_packaging', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic Packaging', 'slug' => 'plastic_food_packaging', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic Cutlery', 'slug' => 'plastic_cutlery', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Crisp/Chip Packet (small)', 'slug' => 'crisp_small', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Crisp/Chip Packet (large)', 'slug' => 'crisp_large', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Styrofoam Plate', 'slug' => 'styrofoam_plate', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Napkin', 'slug' => 'napkin', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Sauce Packet', 'slug' => 'sauce_packet', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Glass Jar', 'slug' => 'glass_jar', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Glass Jar Lid', 'slug' => 'glass_jar_lid', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Aluminium Foil', 'slug' => 'aluminium_foil', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Pizza Box', 'slug' => 'pizza_box', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Food Other', 'slug' => 'food_other', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Chewing Gum', 'slug' => 'chewing_gum', 'created_at' => $now, 'updated_at' => $now],

            //soft drinks
            ['name' => 'Plastic Water bottle', 'slug' => 'water_bottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic Fizzy Drink bottle', 'slug' => 'fizzy_drink_bottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Can', 'slug' => 'tin_can', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Bottle Tops', 'slug' => 'bottle_lid', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Bottle Labels', 'slug' => 'bottle_label', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Sports Drink bottle', 'slug' => 'sports_drink', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Straws', 'slug' => 'straws', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic Cups', 'slug' => 'plastic_cups', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic Cup Tops', 'slug' => 'plastic_cup_tops', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Milk Bottle', 'slug' => 'milk_bottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Milk Carton', 'slug' => 'milk_carton', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Paper Cups', 'slug' => 'paper_cups', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Juice Cartons', 'slug' => 'juice_cartons', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Juice Bottles', 'slug' => 'juice_bottles', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Juice Packet', 'slug' => 'juice_packet', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Ice Tea Bottles', 'slug' => 'ice_tea_bottles', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Ice Tea Can', 'slug' => 'ice_tea_can', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Energy Can', 'slug' => 'energy_can', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Pull-ring', 'slug' => 'pullring', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Straw Packaging', 'slug' => 'strawpacket', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Styrofoam Cup', 'slug' => 'styro_cup', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Soft Drink (other)', 'slug' => 'soft_drink_other', 'created_at' => $now, 'updated_at' => $now],

            //sanitary
            ['name' => 'Gloves', 'slug' => 'gloves', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Facemask', 'slug' => 'facemask', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Condoms', 'slug' => 'condoms', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Nappies', 'slug' => 'nappies', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Menstrual', 'slug' => 'menstrual', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Deodorant', 'slug' => 'deodorant', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Ear Swabs', 'slug' => 'ear_swabs', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Tooth Pick', 'slug' => 'tooth_pick', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Tooth Brush', 'slug' => 'tooth_brush', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Wet Wipes', 'slug' => 'wetwipes', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Hand Sanitiser', 'slug' => 'hand_sanitiser', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Sanitary (other)', 'slug' => 'sanitary_other', 'created_at' => $now, 'updated_at' => $now],

            //dumping
            ['name' => 'Small', 'slug' => 'small', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Medium', 'slug' => 'medium', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Large', 'slug' => 'large', 'created_at' => $now, 'updated_at' => $now],

            //industrial
            ['name' => 'Oil', 'slug' => 'oil', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Plastic', 'slug' => 'industrial_plastic', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Chemical', 'slug' => 'chemical', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Bricks', 'slug' => 'bricks', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Tape', 'slug' => 'tape', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Other', 'slug' => 'industrial_other', 'created_at' => $now, 'updated_at' => $now],

            //coastal
            ['name' => 'Microplastics', 'slug' => 'microplastics', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Mediumplastics', 'slug' => 'mediumplastics', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Macroplastics', 'slug' => 'macroplastics', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Rope small', 'slug' => 'rope_small', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Rope medium', 'slug' => 'rope_medium', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Rope large', 'slug' => 'rope_large', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Fishing gear/nets', 'slug' => 'fishing_gear_nets', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Ghost nets', 'slug' => 'ghost_nets', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Buoys', 'slug' => 'buoys', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Degraded Plastic Bottle', 'slug' => 'degraded_plasticbottle', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Degraded Plastic Bag', 'slug' => 'degraded_plasticbag', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Degraded Drinking Straws', 'slug' => 'degraded_straws', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Degraded Lighters', 'slug' => 'degraded_lighters', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Balloons', 'slug' => 'balloons', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Lego', 'slug' => 'lego', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Shotgun Cartridges', 'slug' => 'shotgun_cartridges', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Styrofoam Small', 'slug' => 'styro_small', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Styrofoam Medium', 'slug' => 'styro_medium', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Styrofoam Large', 'slug' => 'styro_large', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Coastal Other', 'slug' => 'coastal_other', 'created_at' => $now, 'updated_at' => $now],

        ]);
    }
}
