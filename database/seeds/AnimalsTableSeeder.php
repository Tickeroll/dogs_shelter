<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnimalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $animals = [
            [
                'name' => 'dog1',
                'type' => App\Constants\Animals\Type::DOG,
                'gender' => App\Constants\Gender::MALE,
                'birthday' => '2018-09-11',
                'color' => 'yellow',
                'size' => App\Constants\Animals\Size::BIG
            ],

            [
                'name' => 'dog2',
                'type' => App\Constants\Animals\Type::DOG,
                'gender' => App\Constants\Gender::FEMALE,
                'birthday' => '2019-10-22',
                'color' => 'brown with green',
                'size' => App\Constants\Animals\Size::SMALL
            ],

            [
                'name' => 'cat1',
                'type' => App\Constants\Animals\Type::CAT,
                'gender' => App\Constants\Gender::MALE,
                'birthday' => '1999-01-02',
                'color' => 'blue',
                'size' => App\Constants\Animals\Size::BIG
            ],

            [
                'name' => 'cat2',
                'type' => App\Constants\Animals\Type::CAT,
                'gender' => App\Constants\Gender::FEMALE,
                'birthday' => '2005-05-28',
                'color' => 'red',
                'size' => App\Constants\Animals\Size::MIDDLE
            ],
        ];

        foreach ($animals as $animal) {
            DB::table('animals')->insert($animal);
        }
    }
}
