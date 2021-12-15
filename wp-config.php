<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

define('WP_SITEURL', 'http://localhost/woocommerce-reflection-fixed/');
define('WP_HOME', 'http://localhost/woocommerce-reflection-fixed/');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wc_reflection_fixed' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xEj&`V%+F764kWs)]P4JI.ovIlh]hO9q+$W{in9B0-bf^Ex!tevDB3hO7kgF2#;y' );
define( 'SECURE_AUTH_KEY',  '+;r$^>B7IN|U|p+;~kyc8TWUEu=dbT4Q{#>LO?a=W~eQvX6.0aKrhL};V-$jC|yB' );
define( 'LOGGED_IN_KEY',    'B+_`[c>[:fj^ZXsv#N=@9@IIrA+m7,l/UhS[A4u^Jo6flL&X]~h}=,da5;OyPsW|' );
define( 'NONCE_KEY',        'Dmcz1:td,zgMp?8R~8)e8O`bC]Ci;5E^%Fz=TAGgO7O*ChF/wU*9d3@A2kE_X%9V' );
define( 'AUTH_SALT',        '9YyrCc|eP?mZDywb,t`Q-_rF6ZLe+B`bb/>i_2]b@W9i9nuqBvp|Fqg4_47d!@E7' );
define( 'SECURE_AUTH_SALT', '|*.v3?L0%|.UM1-&D;NwW23>@6DezH|cy1iQMd[%Y,(0GO~G?V}6eU= Y0ozh5(y' );
define( 'LOGGED_IN_SALT',   '{IKoU{ w,lPRV&0>,e2#EXw&<-O$t0WSBv0{zu`CA49(9<>:zB!w]0/b51%dq#Y@' );
define( 'NONCE_SALT',       ')LPdXmPCVr~|$s:DzgOMv:+e:knPiit3v$7?p C,OPga-QQ~lp,05e>VmqL-T=5z' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
