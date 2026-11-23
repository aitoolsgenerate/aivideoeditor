import React, { useMemo, useState } from 'react';
import { Check, Code2, Copy, Download, RotateCcw, Sliders, X } from 'lucide-react';
import { DEFAULT_THEME_CONFIG } from '../data/themeData';
import { ThemeConfig } from '../types/theme';
import { generateBloggerXml } from '../utils/generateBloggerXml';

interface BloggerXmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ThemeConfig;
  onChangeConfig: (next: ThemeConfig) => void;
}

export const BloggerXmlModal: React.FC<BloggerXmlModalProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'xml' | 'customize'>('xml');
  const [copied, setCopied] = useState(false);

  const xmlCode = useMemo(() => generateBloggerXml(config), [config]);
  const lineCount = useMemo(() => xmlCode.split('\n').length, [xmlCode]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(xmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([xmlCode], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${config.brandName.toLowerCase().replace(/\s+/g, '-')}-blogger-theme.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const updateField = <K extends keyof ThemeConfig>(key: K, value: ThemeConfig[K]) => {
    onChangeConfig({ ...config, [key]: value });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Blogger XML Theme Code and Customizer"
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Blogger Theme XML Studio
            </h2>
            <p className="text-xs text-slate-500">
              Complete Blogger v3 XML template with &lt;b:skin&gt; variables, Header, and Blog1 loop ({lineCount} lines)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-200/80 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab('xml')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeTab === 'xml'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                XML Code
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('customize')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeTab === 'customize'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                Customize Theme
              </button>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        {activeTab === 'xml' ? (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-white border-b border-slate-200">
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Install on Blogger:</span>{' '}
                Blogger Dashboard &rarr; Theme &rarr; Customize dropdown &rarr; Edit HTML (or Restore XML file)
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition-colors whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Copied XML
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Full XML
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                  style={{ backgroundColor: config.actionBlue }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download .xml
                </button>
              </div>
            </div>

            {/* Code Editor View */}
            <div className="flex-1 overflow-auto bg-[#0f172a] text-slate-100 p-5">
              <pre className="font-mono-code text-xs leading-relaxed whitespace-pre">
                <code>{xmlCode}</code>
              </pre>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-auto p-6 bg-slate-50">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Theme Palette &amp; Copy Tokens
                  </h3>
                  <p className="text-xs text-slate-500">
                    Changes update both the live site preview and the exported Blogger XML &lt;Variable&gt; block.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onChangeConfig(DEFAULT_THEME_CONFIG)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Defaults
                </button>
              </div>

              {/* Color Swatches */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Primary Crimson', key: 'primaryCrimson' as const },
                  { label: 'Secondary Indigo', key: 'secondaryIndigo' as const },
                  { label: 'Accent Emerald', key: 'accentEmerald' as const },
                  { label: 'Action Blue', key: 'actionBlue' as const },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center justify-between gap-3 bg-white p-3.5 rounded-lg border border-slate-200 cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-900">
                        {item.label}
                      </div>
                      <div className="text-xs font-mono-code text-slate-500 uppercase">
                        {config[item.key]}
                      </div>
                    </div>
                    <input
                      type="color"
                      value={config[item.key]}
                      onChange={(e) => updateField(item.key, e.target.value)}
                      className="w-9 h-9 rounded border border-slate-200 cursor-pointer bg-transparent"
                    />
                  </label>
                ))}
              </div>

              {/* Brand & Hero Text */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Brand Wordmark
                    </label>
                    <input
                      type="text"
                      value={config.brandName}
                      onChange={(e) => updateField('brandName', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Brand Subtitle
                    </label>
                    <input
                      type="text"
                      value={config.brandSubtitle}
                      onChange={(e) => updateField('brandSubtitle', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Hero Headline
                  </label>
                  <input
                    type="text"
                    value={config.heroTitle}
                    onChange={(e) => updateField('heroTitle', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Hero Excerpt
                  </label>
                  <textarea
                    rows={3}
                    value={config.heroExcerpt}
                    onChange={(e) => updateField('heroExcerpt', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Projects Section Title
                    </label>
                    <input
                      type="text"
                      value={config.projectsTitle}
                      onChange={(e) => updateField('projectsTitle', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      IT Services Headline
                    </label>
                    <input
                      type="text"
                      value={config.itServicesTitle}
                      onChange={(e) => updateField('itServicesTitle', e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
