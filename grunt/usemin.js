'use strict';

module.exports = {
	options: {
		assetsDirs: [
			'<%= config.prod %>',
			'<%= config.prod %>/images'
		],
		blockReplacements: {
			css: function (block) {
				var media = block.media ? ' media="' + block.media + '" ' : '';
				var inline = block.dest.indexOf('inline') > -1;
				var defer = block.dest.indexOf('defer') > -1;

				if (defer) {
					return '<script>window.loadCSS(\'' + block.dest + '\')</script>';
				} else if (inline) {
					return '<link rel="stylesheet" href="' + block.dest + '"' + media + ' inline="true">';
				} else {
					return '<link rel="stylesheet" href="' + block.dest + '"' + media + '>';
				}
			}
		},
		patterns: {
			html_srcset: [
				// Requires three attempts for 1x, 2x, 3x
				[/srcset="([^, ]+),/g, 'Replacing reference to srcset images'],
				[/srcset=".+, (.+) 2x/g, 'Replacing reference to srcset images'],
				[/srcset=".+, (.+) 3x"/g, 'Replacing reference to srcset images']
			],
			html_og_image: [
				[/content="http:\/\/cwparsons.ca(.+)"/g, 'Replacing reference to srcset images'],
			],
			load_css: [
				[/window.loadCSS\(['"]([^'"]+)['"]\)/gm, 'Replacing reference to async CSS']
			]
		}
	},
	html: ['<%= config.prod %>/**/*.html'],
	html_srcset: ['<%= config.prod %>/**/*.html'],
	html_og_image: ['<%= config.prod %>/**/*.html'],
	load_css: ['<%= config.prod %>/**/*.html'],
	css: ['<%= config.prod %>/styles/**/*.css']
};
