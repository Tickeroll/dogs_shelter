<?php


namespace App\Constants\Animals;


class Size
{
    const SMALL = 1;

    const MIDDLE = 2;

    const BIG = 3;

    public static function getDescription() : array
    {
        return [
            self::SMALL => 'маленький',
            self::MIDDLE => 'средний',
            self::BIG => 'большой'
        ];
    }
}
