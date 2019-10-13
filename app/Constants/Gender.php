<?php


namespace App\Constants;


class Gender
{
    const MALE = 1;

    const FEMALE = 2;

    public static function getDescription() : array
    {
        return [
            self::MALE => 'мужчина',
            self::FEMALE => 'женщина'
        ];
    }
}
