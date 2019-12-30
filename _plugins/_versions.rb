module Jekyll
  class VersionIndex < Page
    def initialize(site, base, dir, version)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'version_index.html')
      self.data['version'] = version
      version_title_prefix = site.config['version_title_prefix'] || 'Version &ldquo;'
      version_title_suffix = site.config['version_title_suffix'] || '&rdquo;'
      self.data['title'] = "#{version_title_prefix}#{version}#{version_title_suffix}"
    end
  end
  class VersionGenerator < Generator
    safe true
    def generate(site)
      if site.layouts.key? 'version_index'
        dir = site.config['version_dir'] || 'version'
        site.versions.keys.each do |version|
          write_version_index(site, File.join(dir, version), version)
        end
      end
    end
    def write_version_index(site, dir, version)
      index = VersionIndex.new(site, site.source, dir, version)
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end
end