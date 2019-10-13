<?php


namespace App\Constants\Animals;


class Type
{
    const DOG = 1;

    const CAT = 2;

    public static function getDescription() : array
    {
        return [
            self::DOG => 'собака',
            self::CAT => 'кот'
        ];
    }
}
